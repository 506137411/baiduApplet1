
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, ScrollView, Image } from '@tarojs/components';
// import { request,showToastTime } from '../assets/utils'
import utils from '../assets/utils'
import classNames from 'classnames'
import './authorityList.scss'
import Scanlist from './scanList'

export default class AuthorityList extends Component {
    state = {
        current: 0,
        scrollLeft: 0,
        nav: [],
        os: Taro.getSystemInfoSync()
    }

    init_fn(options) {
        return new Promise(resolve => {
            const rumorList = utils.request({
                url: 'getRumorList',
                method: 'post',
                data: options && options.data || {}
            });
            resolve(rumorList)
        })
    }

    async componentDidMount() {
        try {
            const { isIndex = 0, current = 0 } = this.props;   //判断是否为首页
            // const { current } = this.$router.params;
            // 加载导航条
            const navres = await utils.request({
                url: 'getField'
            });
            let navlist = [];
            // if (navres.code === 0) {
            navlist = (navres || []).map((item, index) => {
                return {
                    title: item.field_name,
                    id: item.id,
                    field_id: item.id,
                    page: 1,
                    keywords: '',
                    keyword: '',
                    page_size: isIndex ? 4 : 20,
                    brdge: item.is_hot || 0,
                    rumorList: [],
                    index
                }
            });

            // 加载内容   // field_id  ——领域id   page —-第几页    keywords  搜索关键字    keyword—关键词  page_size
            const currentItem = navlist.find(item => item.index === Number(current))
            const rumorInitOptions = {
                data: {
                    page_size: isIndex ? 4 : 20,
                    field_id: currentItem && currentItem.id || 0
                }
            }
            const rumorListres = await this.init_fn(rumorInitOptions);
            navlist[this.state.current].rumorList = rumorListres || [];

            this.setState({
                nav: [...navlist]
            })

        } catch (error) {
            // Taro.showToast({
            //     title: error.data.msg,
            //     icon: 'none',
            //     mask: true,
            //     duration: utils.showToastTime
            // })
        }
    }
    // componentWillReceiveProps(nextProps, nextContext) { }
    // componentWillUnmount() { }
    // componentDidShow() { }
    // componentDidHide() { }
    // componentDidCatchError() { }
    // componentDidNotFound() { }
    async navHandler(id, index, e) {
        // 判断是否为首页
        let { nav, current } = this.state;
        const { isIndex } = this.props;
        if (isIndex) {
            Taro.navigateTo({
                url: `/pages/authority/index?current=${index}`
            })
        } else {
            if (Number(current) === index) {
                return false
            } else {
                const currentItem = nav.find(item => Number(item.index) === Number(index))
                const rumorInitOptions = {
                    data: {
                        page_size: currentItem.page_size,
                        field_id: currentItem && currentItem.id || 0
                    }
                }
                const result = await this.init_fn(rumorInitOptions);
                let rumorList = [...nav];
                rumorList[index].rumorList = [...rumorList[index].rumorList, ...result];
                this.setState({
                    nav: rumorList,
                    current: index
                })

            }
        }
    }
    // onScroll(e) {
    //     let { current, nav } = this.state;
    //     // let { field_id, page } = nav[current];

    //     const currentItem = nav.find(item => Number(item.index) === Number(current))
    //     const rumorInitOptions = {
    //         data: {
    //             page_size: (currentItem.page_size || 1) + 1,
    //             field_id: currentItem && currentItem.id || 0
    //         }
    //     }

    //     const result = await this.init_fn(rumorInitOptions);
    //     let rumorList = [...nav];
    //     rumorList[index].rumorList = [...rumorList[index].rumorList, ...result];
    //     this.setState({
    //         nav: rumorList
    //     })
    //     // this.setState(async (prevState) => {
    //     //     const result = await this.init_fn({
    //     //         data: {
    //     //             field_id: field_id,
    //     //             page: page + 1
    //     //         }
    //     //     })
    //     //     const list = result && result.data;
    //     //     prevState.nav[current].rumorList = [...prevState.nav[current].rumorList, ...list];
    //     //     prevState.nav[current].page = prevState.nav[current].page + 1;
    //     //     return {
    //     //         nav: [...prevState.nav]
    //     //     }
    //     // });
    // }


    render() {
        const { nav = [], os, current } = this.state;
        const { isIndex } = this.props;
        const tabTitle = nav.map((item, index) => {
            return <View className={['tab_t', index == current ? 'active' : '']}
                key={item.id}
                onClick={this.navHandler.bind(this, item.id, index)}
            >
                {item.title}
                {item.brdge ? <Text className="tab_brdge">HOT</Text> : ''}
            </View>
        });
        const tabContent = nav.map((item, index) => {
            return <View className={['tab_c', index == current ? 'active' : '']} >
                {isIndex ? <Scanlist {...item}></Scanlist> : <ScrollView
                    className="tab_c_scroll_view"
                    scrollY
                    scrollWithAnimation
                    onScrollToLower={this.onScroll.bind(this)}>
                    <Scanlist {...item}></Scanlist>
                </ScrollView>}
            </View>
        });
        return (
            <View className={classNames('container', isIndex ? 'container_i' : '')}>
                <View className={classNames('tab_container_t', isIndex ? 'tab_container_t_i' : '')}>
                    <ScrollView
                        className='tab_container_t_c'
                        scrollX
                        scrollWithAnimation
                        scrollLeft={(current - 1.5) * (os.windowWidth / 4)}>
                        {tabTitle}
                    </ScrollView>
                </View>
                {/* {tabContent} */}
                <ScrollView
                    className={classNames('tab_container_c', this.props.isIndex ? 'tab_container_c_i' : '')}
                    scrollX
                    scrollWithAnimation
                    scrollLeft={(current - 1.5) * (os.windowWidth / 4)}>
                    {tabContent}
                </ScrollView>
            </View>
        )
    }
}
