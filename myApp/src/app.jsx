import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import '@tarojs/async-await'

import './app.scss'
import utils from './assets/utils'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
	config = {
		pages: [
			'pages/index/index',
			'pages/rumortest/index',
			'pages/login/index',
			'pages/search/index',
			'pages/history/index',
			'pages/instructions/index',
			'pages/authority/index',
			'pages/informations/index',
			'pages/infomationdetail/index',
			'pages/detail/index',
			'pages/webview/index'
		],
		window: {
			backgroundTextStyle: 'light',
			navigationBarBackgroundColor: '#fff',
			navigationBarTitleText: 'WeChat',
			navigationBarTextStyle: 'black'
		}
	}

	componentDidMount() {


		// console.log(swan)

		// for(let i in swan){
		// 	console.log(i)
		// }
	}

	componentDidShow() { }

	componentDidHide() { }

	componentDidCatchError() { }

	onShareAppMessage(res) {
		return {
			title: '科普中国提供科学、权威、准确的科普信息内容和相关资讯，让科技知识在网上和生活中流行，主要包含科学头条、前沿科技、科普大超市、健康科普、真相揭秘等版块 ...',
			path: '/pages/index/index',
			imageUrl: './assets/images/logo.png',
			webViewUrl
		}
	}

	// 在 App 类中的 render() 函数没有实际作用
	// 请勿修改此函数
	render() {
		return (
			<Index />
		)
	}

	// 提供科学、权威、准确的科普信息内容和相关资讯，让科技知识在网上和生活中流行，主要包含科学头条、前沿科技、科普大超市、健康科普、真相揭秘等版块 ...
}

Taro.render(<App />, document.getElementById('app'))
