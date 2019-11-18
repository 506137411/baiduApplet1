import Taro, { Component, request } from '@tarojs/taro';
import { View, Text, Button, Input, Icon } from '@tarojs/components';
import './index.scss'
import '../../assets/styles/common.scss'

import utils from '../../assets/utils'

export default class Search extends Component {


    config = {
        navigationBarTitleText: '科学辟谣'
    }

    state = {
        isNull: true,
        currentValue: '',
        count: 0
    }

    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }

    async inputChange(e) {
        // 参数：field_id  ——领域id   page —-第几页    keywords  搜索关键字    keyword—关键词  page_size
        // —分页大小
        try {
            this.setState({
                currentValue: e.target.value,
                isNull: !(e.target.value.trim()).length
            })
            const res = await utils.request({
                url: 'getRumorList',
                method: 'post',
                data: {
                    keywords: e.target.value
                }
            })
            const { count } = res;
            this.setState({
                count: Number(count)
            })
        } catch (error) {
            console.log(error, "dfgsdgsdgdfsgdsgdsf")
        }

    }
    async inputBlur(e) {
        // this.setState({
        //     isNull: !(e.target.value.trim()).length
        // })
    }
    clearKeyWords() {
        this.setState({
            currentValue: '',
            isNull: true
        })
    }
    keypress(e) {
        if (e.keyCode === 13) {
            this.searchHandler(e)
        }
    }
    searchHandler(e) {
        e.stopPropagation();
        const { currentValue, count } = this.state;
        if (count) {
            Taro.navigateTo({
                url: "/pages/authority/index?keywords=" + currentValue
            })
        } else {
            Taro.navigateTo({
                url: '/pages/authority/index'
            })
        }

    }
    renderTip() {
        const { isNull, count } = this.state;
        return isNull ? '' : count ? '' : <View className='search_tip'>您搜索的关键词没有，请换一个</View>
    }

    render() {
        return (
            <View className='warp'>
                <View className='search_container'>
                    <View className='input_container'>
                        <Icon size='20' type='search' className='input_icon' color='#BEBEBE' />
                        <Input onChange={this.inputChange.bind(this)} onBlur={this.inputBlur.bind(this)} onKeyPress={this.keypress.bind(this)} className='search_input' type='text' placeholder='请输入您要搜索的关键词' focus />
                        {this.state.isNull ? '' : <Icon onclick={this.clearKeyWords.bind(this)} size='20' type='clear' className='input_icon' />}
                    </View>
                    <Text className='search_btn' onClick={this.searchHandler.bind(this)}>搜索</Text>
                </View>
                {this.renderTip()}
            </View>
        );
    }
}
// export default Index;