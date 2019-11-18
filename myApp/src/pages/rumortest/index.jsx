import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import '../../assets/styles/common.scss'
import './index.scss'
import Mask from '../../components/mask'

import utils from '../../assets/utils'

export default class Rumortest extends Component {

    config = {
        navigationBarTitleText: '谣言测试'
    }

    state = {
        list: [],
        currentIndex: 0,
        currentAnsx: '',
        currentAns: '',
        showMask: false,
        number: 0,
        isDelay: false
    }

    componentWillMount() { }
    async componentDidMount() {
        try {
            const res = await utils.request({ url: 'getRequestList' });
            this.setState({
                list: res
            })
        } catch (error) {
            console.log(error)
        }
    }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() {
        this.setState({
            currentIndex: 0,
            currentAnsx: '',
            currentAns: '',
            showMask: false,
            number: 0,
            isDelay: false,
            list: []
        })
    }
    componentDidCatchError() { }
    componentDidNotFound() { }
    getAnswer(answer, e) {
        e.stopPropagation();
        this.setState({
            currentAnsx: Number(answer),
        })

    }

    renderImg(params, current, rumor_img_style) {
        const { answer } = params;
        const { currentAns } = this.state;
        return currentAns ? (Number(answer) === current) ? < Image src={require('../../assets/images/rumor_true5@2x.png')} style={rumor_img_style} /> : <Image src={require('../../assets/images/rumor_false5@2x.png')} style={rumor_img_style} /> : ''
    }

    going(e) {
        e.stopPropagation();
        let { currentAnsx, currentAns, currentIndex, list = [], number, isDelay } = this.state;
        if (isDelay) {
            return false;
        }
        if (currentAnsx === '') {
            if (currentIndex === list.length) {
                Taro.navigateTo({
                    url: '/pages/index/index'
                })
            } else {
                Taro.showToast({
                    title: '请先答题后在进行操作！',
                    icon: 'none',
                    duration: utils.showToastTime,
                    mask: true,
                    success: res => {
                        console.log('showToast success');
                    },
                    fail: err => {
                        console.log('showToast fail', err);
                    }
                });
            }
        } else {
            this.setState({
                currentAns: currentAnsx,
                isDelay: true,
                number: Number(list[currentIndex].answer) === Number(currentAnsx) ? number + 1 : number,
            })
            let timer = setTimeout(() => {
                this.setState({
                    showMask: true,
                    currentAnsx: '',
                    isDelay: false
                })
                clearTimeout(timer);
            }, 1500);
        }
    }
    closeMask() {
        this.setState((prevstate, prevprops) => {
            return {
                currentAns: '',
                showMask: false,
                currentIndex: prevstate.currentIndex + 1
            }
        })
    }

    calc_answer_state(params, current) {
        const { currentAns } = this.state;
        const { answer } = params;
        const cacl_className = currentAns && 'rumor_btn_' + (Number(answer) === current) || '';
        return 'rumor_btn ' + cacl_className
    }

    render() {
        const imgStyle = {
            width: '240PX',
            height: '22PX',
            margin: '35PX auto',
            display: 'block'
        }
        const imgStyleEnd = {
            width: '72PX',
            height: '22PX',
            margin: '35PX auto',
            display: 'block'
        }

        const rumor_img_style = {
            width: '19PX',
            height: '19PX',
            marginLeft: '5PX',
            display: 'block'
        }
        const { list = [], currentIndex, currentAns, currentAnsx, showMask, number } = this.state;

        const listHtml = list.map((item, index) => {
            return index === currentIndex ? <View className="rumor_detial_container_c">
                <View><Image src={require('../../assets/images/rumor_test@2x.png')} style={imgStyle} /></View>
                <View className='rumor_des'>{index + 1}.{item.question}</View>
                <View className='rumor_btn_container'>
                    <View className={this.calc_answer_state(item, 1)} onClick={this.getAnswer.bind(this, 1)}>
                        <Text>是谣言</Text>
                        {this.renderImg(item, 1, rumor_img_style)}
                    </View>
                    <View className={this.calc_answer_state(item, 2)} onClick={this.getAnswer.bind(this, 2)}>
                        <Text>非谣言</Text>
                        {this.renderImg(item, 2, rumor_img_style)}
                    </View>
                </View>
            </View> : '';
        })
        const resultMessage = (number) => {
            if (number <= 2) {
                return '是谁蒙蔽了你的双眼？抓紧回炉重造，练就火眼金睛！'
            } else if (number === 3 || number === 4) {
                return '再接再厉，追求真相是永无止境的！'
            } else {
                return '全对——传说中的捉“谣”小能手就是你啊'
            }
        }

        return (
            <View className='warp rumor_container'>
                <View className="rumor_container_content">
                    {
                        list.length && <View className="rumor_detial_container">
                            {listHtml}
                            {currentIndex === list.length ? <View className="rumor_detial_container_c">
                                <View><Image src={require('../../assets/images/rumor_end@2x.png')} style={imgStyleEnd} /></View>
                                <View className='rumor_des'>
                                    {resultMessage(number)}
                                </View>
                            </View> : ''}
                        </View>
                    }

                </View>
                <View className='self_btn_container'>
                    {/* <View className="self_btn" onClick={this.going.bind(this)}>
                        {list && (currentIndex === list.length) ? '返回首页' : ' 下一题'}
                    </View> */}

                    {list && currentIndex === list.length ? <View className='self_btn' onClick={this.going.bind(this)}>返回首页</View> : <View className={currentAnsx ? 'self_btn' : 'unsubmit self_btn'} onClick={this.going.bind(this)}>下一题</View>}
                </View>
                {showMask ? <Mask closeMask={this.closeMask.bind(this)}>{list[currentIndex].description}</Mask> : ''}
            </View>
        );
    }
}
// export default Index;