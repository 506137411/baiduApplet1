"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

var _utils = require("../../assets/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rumortest = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Rumortest, _BaseComponent);

  function Rumortest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rumortest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rumortest.__proto__ || Object.getPrototypeOf(Rumortest)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp17", "anonymousState__temp18", "anonymousState__temp19", "loopArray24", "$compid__19", "list", "currentIndex", "currentAnsx", "showMask", "currentAns", "number", "isDelay"], _this.config = {
      navigationBarTitleText: '谣言测试'
    }, _this.state = {
      list: [],
      currentIndex: 0,
      currentAnsx: '',
      currentAns: '',
      showMask: false,
      number: 0,
      isDelay: false
    }, _this.customComponents = ["Mask"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rumortest, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Rumortest.prototype.__proto__ || Object.getPrototypeOf(Rumortest.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _utils2.default.request({ url: 'getRequestList' });

              case 3:
                res = _context.sent;

                this.setState({
                  list: res
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      this.setState({
        currentIndex: 0,
        currentAnsx: '',
        currentAns: '',
        showMask: false,
        number: 0,
        isDelay: false,
        list: []
      });
    }
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "componentDidNotFound",
    value: function componentDidNotFound() {}
  }, {
    key: "getAnswer",
    value: function getAnswer(answer, e) {
      e.stopPropagation();
      this.setState({
        currentAnsx: Number(answer)
      });
    }
  }, {
    key: "_createImgData",
    value: function _createImgData(_$uid) {
      var _this2 = this;

      return function (params, current, rumor_img_style) {
        var answer = params.answer;
        var currentAns = _this2.state.currentAns;

        var anonymousState__temp = Number(answer) === current ? "/assets/images/rumor_true5@2x.png" : null;
        var anonymousState__temp2 = Number(answer) === current ? (0, _index.internal_inline_style)(rumor_img_style) : null;
        var anonymousState__temp3 = "/assets/images/rumor_false5@2x.png";
        var anonymousState__temp4 = (0, _index.internal_inline_style)(rumor_img_style);
        var anonymousState__temp20 = Number(answer) === current;
        return {
          anonymousState__temp: anonymousState__temp,
          anonymousState__temp2: anonymousState__temp2,
          anonymousState__temp3: anonymousState__temp3,
          anonymousState__temp4: anonymousState__temp4,
          anonymousState__temp20: anonymousState__temp20,
          currentAns: currentAns
        };
      };
    }
  }, {
    key: "going",
    value: function going(e) {
      var _this3 = this;

      e.stopPropagation();
      var _state = this.state,
          currentAnsx = _state.currentAnsx,
          currentAns = _state.currentAns,
          currentIndex = _state.currentIndex,
          _state$list = _state.list,
          list = _state$list === undefined ? [] : _state$list,
          number = _state.number,
          isDelay = _state.isDelay;

      if (isDelay) {
        return false;
      }
      if (currentAnsx === '') {
        if (currentIndex === list.length) {
          _index2.default.navigateTo({
            url: '/pages/index/index'
          });
        } else {
          _index2.default.showToast({
            title: '请先答题后在进行操作！',
            icon: 'none',
            duration: _utils2.default.showToastTime,
            mask: true,
            success: function success(res) {
              console.log('showToast success');
            },
            fail: function fail(err) {
              console.log('showToast fail', err);
            }
          });
        }
      } else {
        this.setState({
          currentAns: currentAnsx,
          isDelay: true,
          number: Number(list[currentIndex].answer) === Number(currentAnsx) ? number + 1 : number
        });
        var timer = setTimeout(function () {
          _this3.setState({
            showMask: true,
            currentAnsx: '',
            isDelay: false
          });
          clearTimeout(timer);
        }, 1500);
      }
    }
  }, {
    key: "closeMask",
    value: function closeMask() {
      this.setState(function (prevstate, prevprops) {
        return {
          currentAns: '',
          showMask: false,
          currentIndex: prevstate.currentIndex + 1
        };
      });
    }
  }, {
    key: "calc_answer_state",
    value: function calc_answer_state(params, current) {
      var currentAns = this.state.currentAns;
      var answer = params.answer;

      var cacl_className = currentAns && 'rumor_btn_' + (Number(answer) === current) || '';
      return 'rumor_btn ' + cacl_className;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__19"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__19 = _genCompid2[0],
          $compid__19 = _genCompid2[1];

      var imgStyle = {
        width: '240PX',
        height: '22PX',
        margin: '35PX auto',
        display: 'block'
      };
      var imgStyleEnd = {
        width: '72PX',
        height: '22PX',
        margin: '35PX auto',
        display: 'block'
      };

      var rumor_img_style = {
        width: '19PX',
        height: '19PX',
        marginLeft: '5PX',
        display: 'block'
      };
      var _state2 = this.__state,
          _state2$list = _state2.list,
          list = _state2$list === undefined ? [] : _state2$list,
          currentIndex = _state2.currentIndex,
          currentAns = _state2.currentAns,
          currentAnsx = _state2.currentAnsx,
          showMask = _state2.showMask,
          number = _state2.number;


      var resultMessage = function resultMessage(number) {
        if (number <= 2) {
          return '是谁蒙蔽了你的双眼？抓紧回炉重造，练就火眼金睛！';
        } else if (number === 3 || number === 4) {
          return '再接再厉，追求真相是永无止境的！';
        } else {
          return '全对——传说中的捉“谣”小能手就是你啊';
        }
      };

      var anonymousState__temp17 = list.length ? currentIndex === list.length ? "/assets/images/rumor_end@2x.png" : null : null;
      var anonymousState__temp18 = list.length ? currentIndex === list.length ? (0, _index.internal_inline_style)(imgStyleEnd) : null : null;
      var anonymousState__temp19 = list.length ? currentIndex === list.length ? resultMessage(number) : null : null;
      var loopArray24 = list.map(function (item, index) {
        item = {
          privateOriginal: (0, _index.internal_get_original)(item)
        };
        var loopState__temp6 = index === currentIndex ? _this4._createImgData(__prefix + "cdzzzzzzzz" + ("" + index))(item.privateOriginal, 1, rumor_img_style) : null;
        var loopState__temp8 = index === currentIndex ? _this4._createImgData(__prefix + "cezzzzzzzz" + ("" + index))(item.privateOriginal, 2, rumor_img_style) : null;
        var loopState__temp10 = index === currentIndex ? "/assets/images/rumor_test@2x.png" : null;
        var loopState__temp12 = index === currentIndex ? (0, _index.internal_inline_style)(imgStyle) : null;
        var loopState__temp14 = index === currentIndex ? _this4.calc_answer_state(item.privateOriginal, 1) : null;
        var loopState__temp16 = index === currentIndex ? _this4.calc_answer_state(item.privateOriginal, 2) : null;
        return {
          loopState__temp6: loopState__temp6,
          loopState__temp8: loopState__temp8,
          loopState__temp10: loopState__temp10,
          loopState__temp12: loopState__temp12,
          loopState__temp14: loopState__temp14,
          loopState__temp16: loopState__temp16,
          privateOriginal: item.privateOriginal
        };
      });
      showMask && _index.propsManager.set({
        "closeMask": this.closeMask.bind(this)
      }, $compid__19, $prevCompid__19);
      Object.assign(this.__state, {
        anonymousState__temp17: anonymousState__temp17,
        anonymousState__temp18: anonymousState__temp18,
        anonymousState__temp19: anonymousState__temp19,
        loopArray24: loopArray24,
        $compid__19: $compid__19
      });
      return this.__state;
    }
  }]);

  return Rumortest;
}(_index.Component), _class.$$events = ["getAnswer", "going"], _class.$$componentPath = "pages/rumortest/index", _temp2);
// export default Index;


exports.default = Rumortest;

Page(require('../../npm/@tarojs/taro-swan/index.js').default.createComponent(Rumortest, true));