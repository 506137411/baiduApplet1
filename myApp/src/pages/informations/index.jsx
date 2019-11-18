import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Input, Textarea } from '@tarojs/components';
import classNames from 'classnames'
import utils from '../../assets/utils'
import './index.scss'
import '../../assets/styles/common.scss'

export default class Informations extends Component {

    config = {
        navigationBarTitleText: '提交信息'
    }

    state = {
        codebtn: true,
        titleInputValue: '',
        linkInputValue: '',
        originInputValue: '',
        textareaValue: '',
        textareaMaxLength: 1000,

    }

    componentWillMount() { }
    async componentDidMount() { }
    isUrl(url) {
        return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(url)
    }

    async addRumor() {
        // 参数：title —标题  content—内容    rumor_url—谣言链接地址  origin
        // —谣言来源
        try {
            const { titleInputValue, linkInputValue, originInputValue, textareaValue } = this.state;
            const app_token = Taro.getStorageSync( 'app_token' );
            if (!titleInputValue.trim()) {
                Taro.showToast({
                    title: '标题不能为空',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (!textareaValue.trim()) {
                Taro.showToast({
                    title: '谣言内容为空',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (linkInputValue.trim() && !this.isUrl(linkInputValue)) {
                Taro.showToast({
                    title: '请输入正确的谣言链接地址',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            const res = await utils.request({
                url: 'addRumor',
                method: 'post',
                data: {
                    title: titleInputValue,
                    content: textareaValue,
                    rumor_url: linkInputValue,
                    origin: originInputValue,
                    token: app_token
                }
            })
            if (res.code === 0) {
                Taro.navigateTo({
                    url: '/pages/history/index'
                })
            } else {
                Taro.showToast({
                    title: res.msg,
                    icon: 'none',
                    mask: true,
                    duration: utils.showToastTime
                })
            }
        } catch (error) {
            Taro.showToast({
                title: error.msg,
                icon: 'none',
                mask: true,
                duration: utils.showToastTime
            })
        }
    }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }

    goToHistoryList() {
        Taro.navigateTo({
            url: '/pages/history/index',
        })
        // Taro.switchTab({
        //     url: '/pages/history/index',
        // })
        // console.log(process.env.TARO_ENV)
    }

    titleInputChange(e) {
        this.setState({
            titleInputValue: e.target.value,
        })
    }
    linkInputChange(e) {
        this.setState({
            linkInputValue: e.target.value,
        })
    }
    originInputChange(e) {
        this.setState({
            originInputValue: e.target.value,
        })
    }
    textareaChange(e) {
        this.setState({
            textareaValue: e.target.value
        })
    }

    render() {
        const { textareaValue, codebtn, titleInputValue, linkInputValue, originInputValue, textareaMaxLength } = this.state;
        return (
            <View className="container">
                <View className="warp">
                    <View className="history"><Text onClick={this.goToHistoryList.bind(this)}>历史记录</Text></View>
                    <View className="info_item">
                        <Input type='text' onChange={this.titleInputChange.bind(this)} value={titleInputValue} maxLength='30' placeholder='请输入谣言标题，限制30字符' />
                    </View>
                    <View className="info_item">
                        <Textarea onInput={this.textareaChange.bind(this)} value={textareaValue} style='background:#fff;min-height:265PX;' autoHeight placeholder='请填写谣言内容，限制1000字符' maxlength="1000" />

                        <View className='info_item_tip_info'>
                            <Text className='info_item_tip_info_text'>{textareaValue.length}/{textareaMaxLength}</Text>
                        </View>
                    </View>
                    <View className="info_item">
                        <Input onChange={this.linkInputChange.bind(this)} value={linkInputValue} type='text' className='info_item_link' placeholder='请输入谣言链接地址' />
                    </View>
                    <View className="info_item">
                        <Input onChange={this.originInputChange.bind(this)} value={originInputValue} type='text' placeholder='请输入谣言来源' />
                    </View>
                    <View className={classNames('self_btn', codebtn ? '' : 'unsubmit')} onClick={this.addRumor.bind(this)}>提交</View>
                </View>
            </View>
        );
    }
}
// export default Index;