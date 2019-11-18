import Taro from '@tarojs/taro';
import '@tarojs/async-await'
const userAgent = (params) => {
    const w = window || global;
    return w.navigator.userAgent.indexOf(params) > -1;
}
const utils = {
    // 版本号
    appVersion: 'v1.0',

    //弹窗时间
    showToastTime: 2000,

    // 请求接口封装
    request(options) {
        return new Promise((resolve, reject) => {
            Taro.request({
                url: 'https://xcx-yufa.kepuchina.cn/baidu/' + options.url, // 仅为示例，并非真实的接口地址
                header: {
                    // 'content-type': 'application/json'
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8\r\n'
                },
                method: options.method || 'get',
                dataType: 'json',
                responseType: 'text',
                data: options.data || {},
                success: res => {
                    const { code, msg } = res && res.data;
                    if (code === 0) {
                        resolve(res && res.data && res.data.data || res && res.data);
                    } else {
                        Taro.showToast({
                            title: msg || '数据加载错误，请稍后重试！',
                            icon: 'none',
                            mask: true,
                            duration: utils.showToastTime
                        })
                        reject(res && res.data && res.data.data || res && res.data);
                    }
                },
                fail: err => {
                    console.log(err, 'err')
                    // Taro.showToast({
                    //     title: err.statusText,
                    //     icon: 'none',
                    //     mask: true,
                    //     duration: 20000
                    // })
                    reject(err)
                    // console.log('错误码：' + err.errCode);
                    // console.log('错误信息：' + err.errMsg);
                }
            });
        })
    },
    // 获取系统信息
    getSystemInfo() {
        return new Promise((resolve, reject) => {
            Taro.getSystemInfo({
                success: res => {
                    // console.log(res, "getSystemInfo")
                    resolve(res)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    },

    // 百度getSwanId
    getSwanId() {
        return new Promise((resolve, reject) => {
            swan.getSwanId({
                success: res => {
                    resolve(res)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    },

    // swanLogin
    taroLogin() {
        return new Promise((resolve, reject) => {
            Taro.login({
                success: res => {
                    resolve(res)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    },

    // 百度getUserInfo
    getUserInfo() {
        return new Promise((resolve, reject) => {
            // Taro.getUserInfo({
            swan.getUserInfo({
                success: res => {
                    resolve(res)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    },
    userLogin(params) {
        utils.request({
            url: 'login',
            method: 'post',
            data: params
        }).then(res => {
            const { is_bind, is_agree, token, mobile } = res;
            Taro.setStorageSync('app_token', token);
            // alert(JSON.stringify(res, null, 2))
            // Taro.showToast({
            //     title: JSON.stringify(res, null, 2),
            //     icon: 'none',
            //     mask: true,
            //     duration: utils.showToastTime
            // })
            if (Number(is_bind) === 0) {
                Taro.navigateTo({
                    url: `../../pages/login/index?phone=${mobile}`
                })
            } else if (Number(is_bind) && Number(is_agree) === 0) {
                Taro.navigateTo({
                    url: '../../pages/instructions/index'
                })
            } else {
                Taro.navigateTo({
                    url: '../../pages/informations/index'
                })
            }
        })
    },
    getPhoneNumber() {
        return new Promise((resolve, reject) => {
            swan.getPhoneNumber({
                success: res => {
                    resolve(res)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    },
    checkToken() {
        return new Promise(resolve => {
            const app_token = Taro.getStorageSync('app_token');
            if (app_token) {
                utils.request({
                    url: 'checkToken',
                    method: 'post',
                    data: {
                        token: app_token
                    }
                }).then(res => {
                    const { is_bind, is_agree } = res;

                    // alert(JSON.stringify(res, null, 2))
                    // Taro.showToast({
                    //     title: JSON.stringify(res, null, 2),
                    //     icon: 'none',
                    //     mask: true,
                    //     duration: utils.showToastTime
                    // })
                    if (Number(is_bind) === 0) {
                        Taro.navigateTo({
                            url: '../../pages/login/index'
                        })
                    } else if (Number(is_bind) && Number(is_agree) === 0) {
                        Taro.navigateTo({
                            url: '../../pages/instructions/index'
                        })
                    } else {
                        Taro.navigateTo({
                            url: '../../pages/informations/index'
                        })
                    }
                    resolve(false)
                }).catch(() => {
                    resolve(true)
                })
            } else {
                resolve(true)
            }
        })
    },

    checkSession() {
        const { taroLogin, getUserInfo, getSwanId, getSystemInfo, getPhoneNumber, checkToken } = utils;
        Taro.checkSession({
            success() {
                console.log("success")
                taroLogin().then(loginres => {
                    getPhoneNumber().then(phoneRes => {
                        getSystemInfo().then(system => {
                            getSwanId().then(id => {
                                getUserInfo().then(info => {
                                    const loginData = {
                                        code: loginres && loginres.code || '',
                                        raw_data: info && info.userInfo && JSON.stringify(info.userInfo) || '',
                                        signature: id && id.data && id.data.swanid_signature || '',
                                        swanid: id && id.data && id.data.swanid || '',
                                        encrypted_data: info && info.data || '',
                                        iv: info && info.iv || '',
                                        login_device: system && system.model || '',
                                        app_v: utils.appVersion,
                                        system_v: system && system.system || '',
                                        mobile_encrypted_data: phoneRes && phoneRes.data || ''
                                    }
                                    utils.userLogin(loginData);
                                }).catch(err => {
                                    console.log(err, "err")
                                })
                            }).catch(err => {
                                console.log(err, "err")
                            })
                        }).catch(err => {
                            console.log(err, "err")
                        })
                    }).catch(err => {
                        console.log(err, "err")
                    })
                }).catch(err => {
                    console.log(err, "err")
                })
            },
            fail() {
                console.log("fail")
                // session_key 已经失效，需要重新执行登录流程
                taroLogin().then(loginres => {
                    getPhoneNumber().then(phoneRes => {
                        getSystemInfo().then(system => {
                            getSwanId().then(id => {
                                getUserInfo().then(info => {
                                    const loginData = {
                                        code: loginres && loginres.code || '',
                                        raw_data: info && info.userInfo && JSON.stringify(info.userInfo) || '',
                                        signature: id && id.data && id.data.swanid_signature || '',
                                        swanid: id && id.data && id.data.swanid || '',
                                        encrypted_data: info && info.data || '',
                                        iv: info && info.iv || '',
                                        login_device: system && system.model || '',
                                        app_v: utils.appVersion,
                                        system_v: system && system.system || '',
                                        mobile_encrypted_data: phoneRes && phoneRes.data || ''
                                    }
                                    utils.userLogin(loginData);
                                }).catch(err => {
                                    console.log(err, "err")
                                })
                            }).catch(err => {
                                console.log(err, "err")
                            })
                        }).catch(err => {
                            console.log(err, "err")
                        })
                    }).catch(err => {
                        console.log(err, "err")
                    })
                }).catch(err => {
                    console.log(err, "err")
                })
            }
        })
    }
}



export default utils;