import Taro, { Component } from '@tarojs/taro';
import { View, WebView } from '@tarojs/components';
import './index.scss'
import '../../assets/styles/common.scss'

export default class Webview extends Component {


    config = {
        navigationBarTitleText: '科学辟谣'
    }

    state = {
        url: ''
    }

    componentWillMount() { }
    componentDidMount() {
        const { url } = this.$router.params;
        this.setState({
            url: decodeURIComponent(url)
        })
    }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() {
        // Taro.navigateTo({
        //     url: '/pages/index/index'
        // })
        // this.setState({
        //     url: ''
        // })
    }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }


    render() {
        return (
            <View className='warp'>
                <WebView src={this.state.url} />
                {/* <WebView src='https://www.kepuchina.cn/a.html' /> */}
            </View>
        );
    }
}
// export default Index;