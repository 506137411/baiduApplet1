import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import Scanitem from './scanItem';
import './scanList.scss'
import '../assets/styles/common.scss'
export default class Scanlist extends Component {

    config = {
        navigationBarTitleText: ''
    }

    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    render() {
        const { rumorList = [] } = this.props;
        const listHtml = rumorList.map((item, index) => {
            return <Scanitem {...item} key={item.id}>{index}</Scanitem>
        });
        return (
            <View >
                <View className='scan_list'>
                    <View className="scan_noop"></View>
                    <View className="warp">{listHtml}</View>
                </View>
            </View>
        );
    }
}
// Scanlist.defaultProps={}
// export default Scanlist;