import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
// import Scanlist from '../../components/scanList'
// import AuthorityList from '../../components/authorityList'
// import AuthorityList from './../../components/authorityList'
import Alist from './../../components/aList'
// import Hitem from '../../components/hItem'

import './index.scss'
import '../../assets/styles/common.scss'

export default class Authority extends Component {


    config = {
        navigationBarTitleText: '权威发布'
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
        const { current = 0, keywords = '' } = this.$router.params;

        return (
            <View style="height:100%">
                <Alist isIndex={false} currentIndex={current} keywords={keywords}></Alist>
            </View>
        );
    }
}