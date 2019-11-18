import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import './hItem.scss'

export default class Hitem extends Component {

    config = {
        navigationBarTitleText: ''
    }

    state = {}

    componentWillMount() { }
    componentDidMount() { 

    }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }


    goToDetail(id, e) {
        e.stopPropagation();
        Taro.navigateTo({
            url: `/pages/infomationdetail/index?id=${id}`
        })
    }
    render() {
        const {create_time,title, id} = this.props;
        return (
            <View onClick={this.goToDetail.bind(this, id)} className='history_item'>
                <View className="history_title">{title}</View>
                <View className="history_time">{create_time}</View>
            </View>
        );
    }
}
// export default Hitem;