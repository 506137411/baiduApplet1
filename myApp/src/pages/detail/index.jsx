import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import { request } from '../../assets/utils'
import utils from '../../assets/utils'
var bdParse = require('../../bdParse/bdParse/bdParse.js')
import './index.scss'
import '../../assets/styles/common.scss'
// import '../../bdParse/bdParse/bdParse1.scss'
import '../../bdParse/bdParse/bdParse.scss'
export default class detail extends Component {

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
            const {id}= this.$router.params;
            const res = await utils.request({
                url: 'getRumorDetail',
                data: {
                    id: id
                },
                method: 'post'
            });
            const { title, shelve_time, content, origin, cover } = res;
            // const formateContent = content.replace(
            //     /\<img/gi,
            //     '<img style="display:block; max-width:100%; margin:0 auto" '
            // );

            this.setState({
                title,
                shelve_time,
                content: bdParse.bdParse('article', 'html', content, this.$scope, 5),
                origin,
                cover
            })
        } catch (error) {
            console.log(error)
        }
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    linkHandler() {
        window.open("https://lanhuapp.com/web/#/item/project/board?pid=2f0e5e12-4208-43ac-906a-a304078105ad", "_target")
    }

    render() {
        const { title, shelve_time, content, origin, cover } = this.state;
        return (
            // <View className="warp">
            <View className="warp">
                <View className="detail-title">{title}</View>
                <View className="detail-time">
                    <Text>{shelve_time}</Text>
                    <Text className='detail-origin'>{origin}</Text>
                </View>
                <View className="detail">
                    <import src="../../bdParse/bdParse/bdParse.swan" />
                    <template is="bdParse" data="{{ {bdParseData:article.nodes} }}" />
                </View>

                {/* {cover ? <View className="detail_links">
                    <Text>谣言网址：</Text>
                    <Text className="detail_link" onClick={this.linkHandler.bind(this, cover)}>{cover}</Text>
                </View> : ''} */}

            </View>
        )
    }
}
