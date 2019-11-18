import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import '../../assets/styles/common.scss'
// import { request } from '../../assets/utils'
import utils from '../../assets/utils'
export default class Informationdetail extends Component {

    config = {
        navigationBarTitleText: '详情页'
    }
    state = {
        title: undefined,
        shelve_time: undefined,
        content: undefined,
        origin: undefined,
        cover: undefined
    }

    componentWillMount() { }

    async componentDidMount() {
        try {
            const { id } = this.$router.params;
            // 获取用户提交谣言详情：http://xcx.wd.kepuchina.vip/baidu/getUserRumorDetail
            // 参数：id
            const app_token= Taro.getStorageSync('app_token' );
            const res = await utils.request({
                url: 'getUserRumorDetail',
                method: 'post',
                data: {
                    id,
                    token: app_token
                }
            })
            this.setState({
                title: res.title,
                shelve_time: res.create_time,
                content: res.content,
                origin: res.origin,
                cover: res.rumor_url
            })
        } catch (error) {
            console.log(error)
        }
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    linkHandler(url) {
        // Taro.navigateTo({
        //     url: `/pages/webview/index?url=${url}`
        // });
        // url: '../webview/index?url=https://www.baidu.com/'
        // window.open("https://lanhuapp.com/web/#/item/project/board?pid=2f0e5e12-4208-43ac-906a-a304078105ad", "_target")
    }

    render() {
        const { title, shelve_time, content, origin, cover } = this.state;
        return (
            <View className="warp">
                <View className="detail-title">{title}</View>
                <View className="detail-time">
                    <Text>{shelve_time}</Text>
                    <Text className='detail-origin'>{origin}</Text>
                </View>
                <View className="detail">
                    {content}
                </View>
                {cover ? <View className="detail_links">
                    <Text>谣言网址：</Text>
                    <Text className="detail_link" onClick={this.linkHandler.bind(this, cover)}>{cover}</Text>
                </View> : ''}
            </View>
        )
    }
}
