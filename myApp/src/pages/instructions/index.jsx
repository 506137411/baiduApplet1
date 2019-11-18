import Taro, { Component } from '@tarojs/taro';
import { View, Text, CheckboxGroup, Label, Checkbox } from '@tarojs/components';
import './index.scss'
import '../../assets/styles/common.scss'
import utils from '../../assets/utils'
import classNames from 'classnames'

export default class Instructions extends Component {

	config = {
		navigationBarTitleText: '填写须知'
	}

	state = {
		list: [
			{
				content: '请保证提交内容的客观、真实，并对此承担相应的法律责任。'
			},
			{
				content: '请按照提示清晰、完整地填写相关内容，并允许本平台根据工作需要，在保护您个人权益的前提下，使用您的任何叙述。'
			},
			{
				content: '请如实填写您的联系方式，以便核实相关情况，您的个人信息将被严格保密。'
			},
			{
				content: '请勿重复提交，以免影响平台运行效率。'
			},
			{
				content: '涉政治有害、暴力、低俗等违法和不良信息，请举报至科普中国App在线客服。'
			},
		],
		isChecked: false
	}

	componentWillMount() { }
	componentDidMount() { }
	componentWillReceiveProps(nextProps, nextContext) { }
	componentWillUnmount() { }
	componentDidShow() { }
	componentDidHide() { }
	componentDidCatchError() { }
	componentDidNotFound() { }
	checkboxChange(e) {
		e.stopPropagation();
		this.setState(prevState => {
			return {
				isChecked: !prevState.isChecked
			}
		})
	}

	async agreeFn(e) {
		e.stopPropagation();
		const app_token = Taro.getStorageSync('app_token');
		const res = await utils.request({
			url: 'agreeOn',
			method: 'post',
			data: {
				token: app_token
			}
		})
		const { code, msg } = res;
		if (code === 0) {
			Taro.navigateTo({
				url: '/pages/informations/index'
			})
		}
		Taro.showToast({
			title: msg,
			icon: 'none',
			mask: true,
			duration: utils.showToastTime
		})
	}
	render() {
		const { list = [], isChecked } = this.state;
		return (
			<View className='warp'>
				<View>
					{
						list.map((item, index) => {
							return <View className="instruction_item" > {index + 1 + '.' + item.content}</View>
						})
					}
					<View >
						<CheckboxGroup onClick={this.checkboxChange.bind(this)}>
							<Label className='checkbox-list__label'>
								<Checkbox className='checkbox-list__checkbox'
									value='true' checked={isChecked}></Checkbox>
								<Text>我已认真阅读<Text className="special_text">《填写须知》</Text>并同意改协议</Text>
							</Label>
						</CheckboxGroup>
					</View>
				</View>
				<View className={classNames('self_btn', isChecked ? '' : 'unsubmit')} onClick={this.agreeFn.bind(this)}>下一步</View>
			</View>
		);
	}
}
// export default Index;