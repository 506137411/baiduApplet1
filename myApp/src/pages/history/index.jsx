import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, ScrollView, Image } from '@tarojs/components';

import './index.scss'
import '../../assets/styles/common.scss'
import Hitem from '../../components/hItem'

// import { request } from '../../assets/utils'
import utils from '../../assets/utils'
export default class History extends Component {

    config = {
        navigationBarTitleText: '提交记录'
    }

    state = {
        historylist: [
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // },
            // {
            //     "content": "浙大科学家创造可编造的塑料",
            //     "time": "2019.01.30"
            // }
        ],
        historyImgUrl: require('../../assets/images/history4@2x.png'),
        page: 1,
        page_size: 20
    }
    componentWillMount() { }
    getUserRumorList(options) {
        return new Promise(resolve => {
            const res = utils.request({
                url: 'getUserRumorList',
                method: 'post',
                data: options && options.data || {}
            });
            resolve(res)
        })
    }
    async componentDidMount() {
        // 谣言列表 ：http://xcx.wd.kepuchina.vip/baidu/getUserRumorList   
        // 参数：page —第几页  page_size—一页显示条数  
        try {
            const { page, page_size } = this.state;
            const app_token= Taro.getStorageSync('app_token')
            const rumorListOption = {
                data: {
                    page,
                    page_size,
                    token: app_token
                }
            }
            const res = await this.getUserRumorList(rumorListOption);
            const { list = [] } = res;
            this.setState({
                historylist: list
            })
        } catch (error) {
            const { msg } = error;
            Taro.showToast({
                title: msg,
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
    async onScroll(e) {
        e.stopPropagation();
        const { page, page_size, historylist } = this.state;
        const app_token=  Taro.getStorageSync('app_token')
        const rumorListOption = {
            data: {
                page,
                page_size,
                token: app_token
            }
        }
        const res = await this.getUserRumorList(rumorListOption);
        const { list = [] } = res;
        this.setState({
            historylist: [...historylist, ...list]
        })
    }
    addItem() {
        this.setState((prevState, props) => ({
            historylist: [...prevState.historylist, {
                content: '浙大科学家创造可编造的塑料',
                time: '2019.01.30'
            }]
        }));
    }
    render() {

        const { historylist = [], historyImgUrl } = this.state;
        const itemHtml = historylist.map((item, index) => {
            return <Hitem {...item} index={index}></Hitem>
        });
        const imgStyle = {
            width: '151PX',
            height: '84PX'
        }
        return (
            <View className='container'>
                {
                    historylist.length ? <ScrollView
                        className="warp"
                        scrollY
                        scrollWithAnimation
                        onScrollToLower={this.onScroll.bind(this)}>
                        <View>
                            {itemHtml}
                        </View>
                    </ScrollView> : <View className='center history_content_tip'>
                            <View className="history_content_tip_view">
                                <Image src={historyImgUrl} style={imgStyle} />
                                <View className="history_tip">还没有提交过谣言线索</View>
                                <View style={{ 'height': '130PX', width: '100%' }}></View>
                            </View>
                        </View>
                }

            </View>
        );
    }
}
// export default Index;