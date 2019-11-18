import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image, Icon, Input } from '@tarojs/components';
import "./search.scss"

export default class Search extends Component {
    // class Search extends Component {

    config = {
        navigationBarTitleText: ''
    }

    state = {}

    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    searchHandler(e) {
        e.stopPropagation();
        Taro.navigateTo({
            url: '/pages/search/index'
        })
    }
    render() {
        return (
            <View className="search_content">
                <Image src={require('../assets/images/logo@2x.png')} style="width:85PX;height:20PX;" />
                <View className="search_inputc" onClick={this.searchHandler.bind(this)}>
                    <Icon className="search_inputc_icon" size='20' type='search' color='#BEBEBE' />
                    <Input className="search_inputc_i" placeholder="请输入您要搜索的关键词" disabled />
                </View>
            </View>
        );
    }
}
// export default Search;