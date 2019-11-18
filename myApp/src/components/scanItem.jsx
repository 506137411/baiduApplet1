import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import './item.scss'

export default class Scanitem extends Component {
    constructor(props) {
        super(props);
    }

    // static defaultProps={
    //     itemdata:{}
    // }

    config = {
        navigationBarTitleText: ''
    }

    state = {
        isUpdate: false,
    }

    componentWillMount() { }
    componentDidMount() {
        this.setState({
            isUpdate: true
        })
    }
    componentWillReceiveProps(nextProps, nextContext) {
    }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    shouldComponentUpdate(nextProps, nextState) {
        return JSON.stringify((this.props || {})) === JSON.stringify(nextProps)
    }

    navigateTo(params) {
        Taro.navigateTo({
            url: `/pages/detail/index?id=${params}`
        });
    }
    render() {
        const { title, cover, keywords, expert_info, audit_info, shelve_time, id } = this.props;
        const tag = (keywords || []);
        const navListHTML = tag.map((item, index) => {
            return item.keyword ? <Text key={item.kid} className='item_tag'>{item.keyword.substr(0, 4)}</Text> : ''
        });
        const imgStyle = {
            width: '105PX',
            height: '105PX',
            borderRadius: '5PX'
        }
        return (
            <View className="item" onClick={this.navigateTo.bind(this, id)}>
                {/* {this.props.children} */}
                <View className="item_img">
                    <Image src={cover} style={imgStyle} />
                </View>
                <View className="item_content">
                    <View className="item_title">{title}</View>
                    <View className='item_second'>
                        <View>{navListHTML}</View>
                        <Text>{shelve_time}</Text>
                    </View>
                    {/* <View className="item_three">{this.props.itemdata.resource}</View> */}
                    <View className='item_four'>{expert_info}</View>
                </View>
            </View>
        );
    }
}
// Scanitem.defaultProps = {

// }

// export default Index;