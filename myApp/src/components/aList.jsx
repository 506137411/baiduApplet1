import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, ScrollView } from '@tarojs/components';

// import { request,showToastTime } from '../assets/utils'
import utils from '../assets/utils'
import classNames from 'classnames'
import './aList.scss'
// import Scanlist from '../../components/scanList'
import Scanlist from '../components/scanList'

export default class Alist extends Component {

	config = {
		navigationBarTitleText: ''
	}

	state = {
		current: 0,
		scrollLeft: 0,
		nav: [],
		os: Taro.getSystemInfoSync()
	}

	init_fn(options) {
		return new Promise(resolve => {
			const res = utils.request({
				url: 'getRumorList',
				method: 'post',
				data: options && options.data || {}
			});
			resolve(res)
		})
	}

	componentWillMount() { }
	async componentDidMount() {
		try {
			const { isIndex = 0, currentIndex = 0, keywords = '' } = this.props;   //判断是否为首页\\\
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
					keywords: index === 0 ? keywords : '',
					keyword: '',
					page_size: isIndex ? 4 : 20,
					brdge: item.is_hot || 0,
					rumorList: [],
					index: index,
					has_page: 1
				}
			});
			// 加载内容   // field_id  ——领域id   page —-第几页    keywords  搜索关键字    keyword—关键词  page_size
			const currentItem = navlist.find(item => item.index === Number(currentIndex))
			const rumorInitOptions = {
				data: {
					page_size: isIndex ? 4 : 20,
					page: 1,
					field_id: currentItem && currentItem.id || 0,
					keywords: currentItem && currentItem.keywords || '',
				}
			}
			const rumorListres = await this.init_fn(rumorInitOptions);
			navlist[currentIndex].rumorList = rumorListres && rumorListres.list || [];
			navlist[currentIndex].has_page = rumorListres && rumorListres.has_page || 0;
			this.setState({
				nav: [...navlist],
				current: currentIndex,
			})

			setTimeout(() => {
				this.setState({
					scrollLeft: this.calcScrollLeft(Number(currentIndex))
				})
			}, 500)
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
	componentWillUnmount() {
		// this.setState({
		// 	current: 0,
		// 	scrollLeft: 0,
		// 	nav: [],
		// 	os: Taro.getSystemInfoSync()
		// })
	}
	componentDidShow() { }
	componentDidHide() {

	}
	componentDidCatchError() { }
	componentDidNotFound() { }


	calcScrollLeft(index) {
		const { os } = this.state;
		return (index - 2) * (os.windowWidth / 4);
	}

	async navHandler(index) {
		// 判断是否为首页
		let { nav, current } = this.state;
		const isIndex = Boolean(this.props.isIndex);
		if (isIndex) {
			Taro.navigateTo({
				url: `/pages/authority/index?current=${index}`
			})
		} else {
			if (Number(current) === index) {
				return false
			} else {
				const currentItem = nav.find(item => Number(item.index) === Number(index));
				if (!currentItem.rumorList.length) {
					const rumorInitOptions = {
						data: {
							page: currentItem.page,
							page_size: currentItem.page_size,
							field_id: currentItem && currentItem.id || 0,
							keywords: currentItem && currentItem.keywords || ''
						}
					}
					const result = await this.init_fn(rumorInitOptions);
					let rumorList = [...nav];
					const currentRumorList = result && result.list || [];
					rumorList[index].rumorList = [...rumorList[index].rumorList, ...currentRumorList];
					this.setState({
						nav: rumorList
					})
				}
				this.setState({
					current: index,
					scrollLeft: this.calcScrollLeft(index)
				})

			}
		}
	}

	async onScroll(e) {
		// e.stopPropagation();
		let { current, nav } = this.state;
		let { field_id, page, page_size, has_page } = nav[current];
		if (Number(has_page) === 0) {
			return false
		}
		const rumorInitOptions = {
			data: {
				page: page + 1,
				page_size: page_size,
				field_id: field_id
			}
		}
		const result = await this.init_fn(rumorInitOptions);

		let rumorList = [...nav];
		const currentRumorList = result && result.list || [];
		rumorList[current].page = rumorList[current].page + 1;
		rumorList[current].rumorList = [...rumorList[current].rumorList, ...currentRumorList];
		rumorList[current].has_page = result && result.has_page || 0;
		this.setState({
			nav: rumorList
		})
	}
	render() {
		const { nav = [], current, scrollLeft } = this.state;

		const isIndex = Boolean(this.props.isIndex);
		const tabTitle = nav.map((item, index) => {
			return <View className={['tab_t', index == current ? 'active' : '']} key={item.id} onClick={this.navHandler.bind(this, index)}>
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
					{Number(item.has_page) === 0 ? <View className='list_end_tip'>已经到底啦</View> : ''}


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
						scrollLeft={scrollLeft}>
						{tabTitle}
					</ScrollView>
				</View>
				<ScrollView
					className={classNames('tab_container_c', this.props.isIndex ? 'tab_container_c_i' : '')}
					scrollX
					scrollWithAnimation
					scrollLeft={scrollLeft}>
					{tabContent}
				</ScrollView>
			</View>
		)
	}
}
// export default Index;