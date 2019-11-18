import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import './mask.scss'

export default class Mask extends Component {

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
    render() {
        return (
            <View className="mask">
                <View className="mask_content">
                    <View className="mask_content_title">
                        真相解读
                    </View>
                    <View className="mask_content_detail">
                        {this.props.children}
                    </View>
                    <View className="mask_content_btn" onClick={this.props.closeMask}>
                        学习了
                    </View>
                </View>
            </View>
        );
    }
}
// export default Mask;