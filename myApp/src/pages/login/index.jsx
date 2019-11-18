import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Input, Image } from '@tarojs/components';
import '../../assets/styles/common.scss'
import './index.scss'
import phone14 from './../../assets/images/phone14@2x.png'
import verificationCode3 from './../../assets/images/verificationCode3@2x.png'
// import password15 from './../../assets/images/password15@2x.png'
// import classNames from 'classnames'

import utils from '../../assets/utils'

export default class Login extends Component {

	config = {
		navigationBarTitleText: '绑定手机号'
	}

	state = {
		codeinfo: '发送验证码',
		phone: '',
		verificationCode: '',
		codebtn: false
	}

	phoneHandler(e) {
		this.setState({
			phone: e.target.value
		})
	}
	verificationCodeHandler(e) {
		this.setState({
			verificationCode: e.target.value
		})
	}

	async sendSMS() {
		const { phone } = this.state;
		const app_token = Taro.getStorageSync('app_token');
		let i = 60;
		let regex = /^1[3456789]\d{9}$/;
		if (!regex.test(phone)) {
			return false;
		}
		// 参数：mobile   手机号   country_code ：国家电话编码
		const res = await utils.request({
			url: 'sendVerifySms',
			method: 'post',
			data: {
				mobile: phone,
				country_code: '86',
				token: app_token
			}
		})
		const { msg } = res;
		Taro.showToast({
			title: msg,
			icon: 'none',
			mask: true,
			duration: utils.showToastTime
		})

		let t = setInterval(() => {
			if (i > 0) {
				this.setState({
					codeinfo: --i + 's'
				})
			} else {
				this.setState({
					codeinfo: '发送验证码'
				})
				clearInterval(t)
			}
		}, 1000);
	}

	componentWillMount() { }
	componentDidMount() {
		const { phone } = this.$router.params;

		this.setState({
			phone: phone || ''
		})
		// checkSession()
	}
	componentWillReceiveProps(nextProps, nextContext) { }
	componentWillUnmount() { }
	componentDidShow() { }
	componentDidHide() { }
	componentDidCatchError() { }
	componentDidNotFound() { }
	checkPhone(e) {
		e.stopPropagation();
		let { phone } = this.state;
		let phoneValue = phone.trim();
		if (phoneValue === '') {
			Taro.showToast({
				title: '请输入手机号',
				icon: 'none',
				duration: 2000
			});
			return false;
		} else if (!(/^1[3456789]\d{9}$/.test(phoneValue))) {
			Taro.showToast({
				title: '请输入正确的手机格式',
				icon: 'none',
				duration: 2000
			});
			return false;
		}
		return true;
	}


	checkCode(e) {
		e.stopPropagation();
		let { verificationCode } = this.state;
		let code = verificationCode.trim();
		if (code === '') {
			Taro.showToast({
				title: '请输入验证码',
				icon: 'none',
				duration: 2000
			});
			return false;
		} else if (!(/^\d{4,6}$/.test(code))) {
			Taro.showToast({
				title: '请输入正确的验证码',
				icon: 'none',
				duration: 2000
			});
			return false;
		}
		return true;
	}
	getPhoneNumber(e) {
		console.log('用户手机号:', e);
	}
	async submit(e) {
		e.stopPropagation();
		const { phone, verificationCode } = this.state;
		const app_token = Taro.getStorageSync('app_token');
		let regex = /^1[3456789]\d{9}$/;
		if (!regex.test(phone)) {
			return false;
		}
		// 参数：mobile   手机号   country_code ：国家电话编码
		const res = await utils.request({
			url: 'bindAccount',
			method: 'post',
			data: {
				mobile: phone,
				verify: verificationCode,
				token: app_token
			}
		})
		const { code, msg } = res;
		if (Number(code) === 0) {
			Taro.navigateTo({
				url: '/pages/instructions/index'
			})
		} else {
			Taro.showToast({
				title: msg,
				icon: 'none',
				mask: true,
				duration: utils.showToastTime
			})
		}
	}
	render() {
		let { phone, verificationCode, codebtn, codeinfo } = this.state;
		const imgStyle = {
			width: '18PX',
			height: '21PX'
		}
		return (
			<View className='warp'>
				<View className='login_container'>
					<View className='login_container_line'>
						<Image style={imgStyle} src={phone14} />
						<Input type='number' placeholder='请输入手机号' value={phone} onChange={this.phoneHandler.bind(this)} onBlur={this.checkPhone.bind(this)} />
					</View>
					<View className='login_container_line'>
						<Image style={imgStyle} src={verificationCode3} />
						<Input type='text' placeholder='请输入验证码' value={verificationCode} onChange={this.verificationCodeHandler.bind(this)} onBlur={this.checkCode.bind(this)} />
						<View className='getCode' onClick={this.sendSMS.bind(this)}>{codeinfo}</View>
					</View>
					{/* <View className='login_container_line'>
						<Image style={imgStyle} src={password15} />
						<Input type='password' placeholder='请输入密码' />
					</View> */}
				</View>
				<View className='submit' onClick={this.submit.bind(this)}>绑定手机号</View>
				{/* <View className={classNames('submit', codebtn ? '' : 'unsubmit')} onClick={this.submit.bind(this)}>绑定手机号</View> */}
			</View>
		);
	}
}
// export default Index;