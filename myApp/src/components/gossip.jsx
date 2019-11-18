import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
// import { request } from '../assets/utils'
import utils from '../assets/utils'
import './gossip.scss'

export default class Gossip extends Component {

    config = {
        navigationBarTitleText: ''
    }

    state = {
        list: [
            // {
            //     imgurl: require('../assets/images/list_item@2x.png'),
            //     title: '谁在朋友圈制造“标题党”',
            //     descript: '究竟是谁在制造这些“标题党”文章？近日，新京报记者随机抽样收集了30条标题用词夸张'
            // },
            // {
            //     imgurl: require('../assets/images/list_item@2x.png'),
            //     title: '谁在朋友圈制造“标题党”',
            //     descript: '究竟是谁在制造这些“标题党”文章？近日，新京报记者随机抽样收集了30条标题用词夸张'
            // },
            // {
            //     imgurl: require('../assets/images/list_item@2x.png'),
            //     title: '谁在朋友圈制造“标题党”',
            //     descript: '究竟是谁在制造这些“标题党”文章？近日，新京报记者随机抽样收集了30条标题用词夸张'
            // },
            // {
            //     imgurl: require('../assets/images/list_item@2x.png'),
            //     title: '谁在朋友圈制造“标题党”',
            //     descript: '究竟是谁在制造这些“标题党”文章？近日，新京报记者随机抽样收集了30条标题用词夸张'
            // },
        ]
    }


    componentWillMount() { }
    async componentDidMount() {
        try {
            const res = await utils.request({
                url: 'getGossip'
            });
            this.setState({
                list: res || []
            })
        } catch (error) {
            console.log(error)
        }
    }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    goWebView(params, e) {
        Taro.navigateTo({
            url: `/pages/webview/index?url=${params.url}`
        });
    }

    renderGossip(item) {
        return (
            <View className='gossip_item' onClick={this.goWebView.bind(this, item)}>
                <Image src={item.image} style="width:90PX;height:90PX;" className="gossip_img" />
                <View className='gossip-item_content'>
                    <View className="gossip_item_title">{item.title}</View>
                    <View className="gossip_item_descript">{item.summary}</View>
                </View>
            </View>
        )
    }
    render() {
        const { list = [] } = this.state;
        const listHtml = list.map((item, index) => {
            return <View className='gossip_list_content'>{this.renderGossip(item)}</View>
        })
        return (
            <View className="gossip_list">
                <View className="gossip_title">
                    <Image src={require('../assets/images/bright5@2x.png')} style="width:31PX;height:1PX;" />
                    <View className="gossip_title_t">科学流言月度榜单</View>
                    <Image src={require('../assets/images/bleft@2x.png')} style="width:31PX;height:1PX;" />
                </View>
                {listHtml}
            </View>
        );
    }
}
// export default Index;