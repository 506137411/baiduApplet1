import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import './index.scss'
import '../../assets/styles/common.scss'

import Search from '../../components/search'
// import ScanList from '../../components/scanList'
// import Authorityc from '../../components/authorityc'
// import AuthorityList from '../../components/authorityList'
import Alist from '../../components/aList'
import Gossip from '../../components/gossip'
import utils from '../../assets/utils'

export default class Index extends Component {

	config = {
		navigationBarTitleText: '科学辟谣'
	}
	state = {
		list: [
			{
				url: require('../../assets/images/authority7@2x.png'),
				id: 1
			},
			{
				url: require('../../assets/images/rumour8@2x.png'),
				id: 2
			},
			{
				url: require('../../assets/images/authority_c9@2x.png'),
				id: 3
			}
		],
		currentIndex: 0,
		navList: [{
			id: 1,
			title: '综合排序',
		}, {
			id: 2,
			title: '距离近',
		}, {
			id: 3,
			title: '销量',
		}, {
			id: 4,
			title: '价格排序',
		}],
		isgranted: false
	}

	changeNavState(v) {
		this.setState(() => {
			return {
				currentIndex: v
			};
		});
	}

	componentWillMount() { }

	componentDidMount() {
		const data = Taro.getStorage({ key: 'app_phone' });
		data.then(res => {
			this.setState({
				isgranted: res.data === '' ? false : true
			})
		})


	}

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	async navHandler(index, e) {
		e.stopPropagation();

		switch (index) {
			case 0:
				Taro.navigateTo({
					url: '/pages/authority/index'
				});
				break;
			case 1:
				Taro.navigateTo({
					url: '/pages/rumortest/index'
				});
				break;
			default:
				const checkToken = await utils.checkToken();
				if (checkToken) {
					utils.checkSession();
				}
		}
	}

	render() {
		const { list = [] } = this.state;
		const listHTML = list.map((item, index) => {
			return <Image onClick={this.navHandler.bind(this, index)} open-type="getPhoneNumber" key={item.id} src={item.url} style='width:103PX;height:45PX' />
			// return index === list.length - 1 ? <Button className='self_btn' key={item.id} onClick={this.getPhoneNumber.bind(this)}  ><Image src={item.url} style='width:103PX;height:45PX' /></Button> : <Button className='self_btn' key={item.id} onClick={this.navHandler.bind(this, index)}  ><Image src={item.url} style='width:103PX;height:45PX' /></Button>
		});

		return (
			<View className='index'>
				<View className="warp">
					<Search></Search>
					<View className="nav_list">
						{listHTML}
					</View>
				</View>
				<View className="index_authority" >
					<Alist isIndex={true} currentIndex={0}></Alist>
				</View>
				<View className="warp">
					<Gossip isIndex="true"></Gossip>
				</View>
			</View>
		)
	}
}
