"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

require("../npm/@tarojs/async-await/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userAgent = function userAgent(params) {
  var w = window || global;
  return w.navigator.userAgent.indexOf(params) > -1;
};
var utils = {
  // 版本号
  appVersion: 'v1.0',

  //弹窗时间
  showToastTime: 2000,

  // 请求接口封装
  request: function request(options) {
    return new Promise(function (resolve, reject) {
      _index2.default.request({
        url: 'https://xcx-yufa.kepuchina.cn/baidu/' + options.url, // 仅为示例，并非真实的接口地址
        header: {
          // 'content-type': 'application/json'
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8\r\n'
        },
        method: options.method || 'get',
        dataType: 'json',
        responseType: 'text',
        data: options.data || {},
        success: function success(res) {
          var _ref = res && res.data,
              code = _ref.code,
              msg = _ref.msg;

          if (code === 0) {
            resolve(res && res.data && res.data.data || res && res.data);
          } else {
            _index2.default.showToast({
              title: msg || '数据加载错误，请稍后重试！',
              icon: 'none',
              mask: true,
              duration: utils.showToastTime
            });
            reject(res && res.data && res.data.data || res && res.data);
          }
        },
        fail: function fail(err) {
          console.log(err, 'err');
          // Taro.showToast({
          //     title: err.statusText,
          //     icon: 'none',
          //     mask: true,
          //     duration: 20000
          // })
          reject(err);
          // console.log('错误码：' + err.errCode);
          // console.log('错误信息：' + err.errMsg);
        }
      });
    });
  },

  // 获取系统信息
  getSystemInfo: function getSystemInfo() {
    return new Promise(function (resolve, reject) {
      _index2.default.getSystemInfo({
        success: function success(res) {
          // console.log(res, "getSystemInfo")
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    });
  },


  // 百度getSwanId
  getSwanId: function getSwanId() {
    return new Promise(function (resolve, reject) {
      swan.getSwanId({
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    });
  },


  // swanLogin
  taroLogin: function taroLogin() {
    return new Promise(function (resolve, reject) {
      _index2.default.login({
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    });
  },


  // 百度getUserInfo
  getUserInfo: function getUserInfo() {
    return new Promise(function (resolve, reject) {
      // Taro.getUserInfo({
      swan.getUserInfo({
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    });
  },
  userLogin: function userLogin(params) {
    utils.request({
      url: 'login',
      method: 'post',
      data: params
    }).then(function (res) {
      var is_bind = res.is_bind,
          is_agree = res.is_agree,
          token = res.token,
          mobile = res.mobile;

      _index2.default.setStorageSync('app_token', token);
      // alert(JSON.stringify(res, null, 2))
      // Taro.showToast({
      //     title: JSON.stringify(res, null, 2),
      //     icon: 'none',
      //     mask: true,
      //     duration: utils.showToastTime
      // })
      if (Number(is_bind) === 0) {
        _index2.default.navigateTo({
          url: "../../pages/login/index?phone=" + mobile
        });
      } else if (Number(is_bind) && Number(is_agree) === 0) {
        _index2.default.navigateTo({
          url: '../../pages/instructions/index'
        });
      } else {
        _index2.default.navigateTo({
          url: '../../pages/informations/index'
        });
      }
    });
  },
  getPhoneNumber: function getPhoneNumber() {
    return new Promise(function (resolve, reject) {
      swan.getPhoneNumber({
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    });
  },
  checkToken: function checkToken() {
    return new Promise(function (resolve) {
      var app_token = _index2.default.getStorageSync('app_token');
      if (app_token) {
        utils.request({
          url: 'checkToken',
          method: 'post',
          data: {
            token: app_token
          }
        }).then(function (res) {
          var is_bind = res.is_bind,
              is_agree = res.is_agree;

          // alert(JSON.stringify(res, null, 2))
          // Taro.showToast({
          //     title: JSON.stringify(res, null, 2),
          //     icon: 'none',
          //     mask: true,
          //     duration: utils.showToastTime
          // })

          if (Number(is_bind) === 0) {
            _index2.default.navigateTo({
              url: '../../pages/login/index'
            });
          } else if (Number(is_bind) && Number(is_agree) === 0) {
            _index2.default.navigateTo({
              url: '../../pages/instructions/index'
            });
          } else {
            _index2.default.navigateTo({
              url: '../../pages/informations/index'
            });
          }
          resolve(false);
        }).catch(function () {
          resolve(true);
        });
      } else {
        resolve(true);
      }
    });
  },
  checkSession: function checkSession() {
    var taroLogin = utils.taroLogin,
        getUserInfo = utils.getUserInfo,
        getSwanId = utils.getSwanId,
        getSystemInfo = utils.getSystemInfo,
        getPhoneNumber = utils.getPhoneNumber,
        checkToken = utils.checkToken;

    _index2.default.checkSession({
      success: function success() {
        console.log("success");
        taroLogin().then(function (loginres) {
          getPhoneNumber().then(function (phoneRes) {
            getSystemInfo().then(function (system) {
              getSwanId().then(function (id) {
                getUserInfo().then(function (info) {
                  var loginData = {
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
                  };
                  utils.userLogin(loginData);
                }).catch(function (err) {
                  console.log(err, "err");
                });
              }).catch(function (err) {
                console.log(err, "err");
              });
            }).catch(function (err) {
              console.log(err, "err");
            });
          }).catch(function (err) {
            console.log(err, "err");
          });
        }).catch(function (err) {
          console.log(err, "err");
        });
      },
      fail: function fail() {
        console.log("fail");
        // session_key 已经失效，需要重新执行登录流程
        taroLogin().then(function (loginres) {
          getPhoneNumber().then(function (phoneRes) {
            getSystemInfo().then(function (system) {
              getSwanId().then(function (id) {
                getUserInfo().then(function (info) {
                  var loginData = {
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
                  };
                  utils.userLogin(loginData);
                }).catch(function (err) {
                  console.log(err, "err");
                });
              }).catch(function (err) {
                console.log(err, "err");
              });
            }).catch(function (err) {
              console.log(err, "err");
            });
          }).catch(function (err) {
            console.log(err, "err");
          });
        }).catch(function (err) {
          console.log(err, "err");
        });
      }
    });
  }
};

exports.default = utils;