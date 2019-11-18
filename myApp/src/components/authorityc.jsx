
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, ScrollView, Image } from '@tarojs/components';
// import { request } from '../../assets/utils'
// import { request } from '../assets/utils'
import utils from '../assets/utils'
import classNames from 'classnames'
import './authorityc.scss'
// import Scanlist from '../../components/scanList'
import Scanlist from '../components/scanList'

export default class Cuthorityc extends Component {

    config = {
        navigationBarTitleText: ''
    }

    state = {
        current: 0,
        scrollLeft: 0,
        nav: [
            // {
            //     title: '全部',
            //     brdge: ""
            // },
            // {
            //     title: '食品安全',
            //     brdge: require('../../assets/images/hot4@2x.png')
            // },
            // {
            //     title: '营养健康'
            //     , brdge: ""

            // },
            // {
            //     title: '疾病防治'
            //     , brdge: ""
            // },
            // {
            //     title: '生物医学'
            //     , brdge: ""
            // },
            // {
            //     title: '全部'
            //     , brdge: ""
            // },
            // {
            //     title: '食品安全'
            //     , brdge: ""
            // },
            // {
            //     title: '营养健康'
            //     , brdge: ""
            // },
            // {
            //     title: '疾病防治'
            //     , brdge: ""
            // },
            // {
            //     title: '生物医学'
            //     , brdge: ""
            // },
        ],

        os: Taro.getSystemInfoSync()
    }

    componentWillMount() { }

    init_fn(options) {
        return new Promise(resolve => {
            const rumorList = utils.request({
                url: 'getRumorList',
                data: options && options.data || {}
            });
            resolve(rumorList)
        })

    }


    async componentDidMount() {
        try {
            const navres = await utils.request({
                url: 'getField'
            });
            const rumorListres = await this.init_fn()
            // field_id  ——领域id   page —-第几页    keywords  搜索关键字    keyword—关键词  page_size
            const navlist = (navres.data || []).map(item => {
                return {
                    title: item.field_name,
                    id: item.id,
                    field_id: item.id,
                    page: 1,
                    keywords: '',
                    keyword: '',
                    page_size: 20,
                    brdge: item.is_hot || 0,
                    rumorList: []
                }
            });
            navlist[this.state.current].rumorList = rumorListres && rumorListres.data || []
            this.setState({
                nav: navlist
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
    async nanHandler(id, index, e) {
        const tabWidth = this.state.os.windowWidth / 4;
        // e.target.clientWidth
        this.setState({
            scrollLeft: (index - 1.5) * tabWidth //使点击的tab始终在居中位置
        })
        if (this.state.current == index) {
            return false
        } else {
            const result = await this.init_fn({
                data: {
                    field_id: id
                }
            })
            const list = result && result.data;
            let rumorList = [...this.state.nav];
            rumorList[index].rumorList = [...rumorList[index].rumorList, ...list]
            this.setState({
                nav: rumorList,
                current: index
            })
        }
    }
    onScroll(e) {
        let { current, nav } = this.state;
        let { field_id, page } = nav[current];
        this.setState(async (prevState) => {
            const result = await this.init_fn({
                data: {
                    field_id: field_id,
                    page: page + 1
                }
            })
            const list = result && result.data;
            prevState.nav[current].rumorList = [...prevState.nav[current].rumorList, ...list];
            prevState.nav[current].page = prevState.nav[current].page + 1;
            return {
                nav: [...prevState.nav]
            }
        });
    }
    render() {
        const { nav = [] } = this.state;
        const tabTitle = nav.map((item, index) => {
            return <View className={['tab_t', index == this.state.current ? 'active' : '']} key={item.id}
                onClick={this.nanHandler.bind(this, item.id, index)}>
                {item.title}
                {item.brdge ? <Text className="tab_brdge">HOT</Text> : ''}
            </View>
        });
        const tabContent = nav.map((item, index) => {
            return <View className={['tab_c', index == this.state.current ? 'active' : '']}>
                {this.props.isIndex ? <Scanlist {...item}></Scanlist> : <ScrollView
                    className="tab_c_scroll_view"
                    scrollY
                    scrollWithAnimation
                    onScrollToLower={this.onScroll.bind(this)}>
                    <Scanlist {...item}></Scanlist>
                </ScrollView>}
            </View>
        });
        return (
            // <View className="container">
            <View  className={classNames('container', this.props.isIndex ? 'container_i' : '')}>
                <View className={classNames('tab_container_t', this.props.isIndex ? 'tab_container_t_i' : '')}>
                    <ScrollView
                        className='tab_container_t_c'
                        scrollX
                        scrollWithAnimation
                        scrollLeft={this.state.scrollLeft}>
                        {tabTitle}
                    </ScrollView>
                </View>

                <ScrollView
                    className={classNames('tab_container_c', this.props.isIndex ? 'tab_container_c_i' : '')}
                    scrollX
                    scrollWithAnimation
                    scrollLeft={this.state.os.windowWidth * (this.state.current - 2)}>
                    {tabContent}
                </ScrollView>
            </View>
        );
    }
}

