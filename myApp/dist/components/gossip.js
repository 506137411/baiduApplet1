"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

// import { request } from '../assets/utils'


var _index = require("../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

var _utils = require("../assets/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gossip = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Gossip, _BaseComponent);

  function Gossip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Gossip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gossip.__proto__ || Object.getPrototypeOf(Gossip)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "loopArray20", "list"], _this.config = {
      navigationBarTitleText: ''
    }, _this.state = {
      list: [
        // {
        //     imgurl: require('../assets/images/list_item@2x.png'),
        //     title: '谁在朋友圈制造“标题党”',
        //     descript: '究竟是谁在制造这些“标题党”文章？近日，新京报记者随机抽样收集了30条标题用词夸张'
        // },
        // {
        //     imgurl: require('../assets/images/list_item@2x.png'),
        //     title: '谁在朋友圈制造“标题党”',
        //     descript: '究竟是谁在制造这些“标题党”文章？近日，新京报记者随机抽样收集了30条标题用词夸张'
        // },
        // {
        //     imgurl: require('../assets/images/list_item@2x.png'),
        //     title: '谁在朋友圈制造“标题党”',
        //     descript: '究竟是谁在制造这些“标题党”文章？近日，新京报记者随机抽样收集了30条标题用词夸张'
        // },
        // {
        //     imgurl: require('../assets/images/list_item@2x.png'),
        //     title: '谁在朋友圈制造“标题党”',
        //     descript: '究竟是谁在制造这些“标题党”文章？近日，新京报记者随机抽样收集了30条标题用词夸张'
        // },
      ]
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Gossip, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Gossip.prototype.__proto__ || Object.getPrototypeOf(Gossip.prototype), "_constructor", this).call(this, props);

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
                return _utils2.default.request({
                  url: 'getGossip'
                });

              case 3:
                res = _context.sent;

                this.setState({
                  list: res || []
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
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "componentDidNotFound",
    value: function componentDidNotFound() {}
  }, {
    key: "goWebView",
    value: function goWebView(params, e) {
      _index2.default.navigateTo({
        url: "/pages/webview/index?url=" + params.url
      });
    }
  }, {
    key: "_createGossipData",
    value: function _createGossipData(_$uid) {
      return function (item) {
        return {
          item: item
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state$list = this.__state.list,
          list = _state$list === undefined ? [] : _state$list;

      var anonymousState__temp3 = "/assets/images/bright5@2x.png";
      var anonymousState__temp4 = "/assets/images/bleft@2x.png";
      var loopArray20 = list.map(function (item, index) {
        item = {
          privateOriginal: (0, _index.internal_get_original)(item)
        };

        var loopState__temp2 = _this2._createGossipData(__prefix + "cazzzzzzzz" + ("" + index))(item.privateOriginal);

        return {
          loopState__temp2: loopState__temp2,
          privateOriginal: item.privateOriginal
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray20: loopArray20
      });
      return this.__state;
    }
  }]);

  return Gossip;
}(_index.Component), _class.$$events = ["goWebView"], _class.$$componentPath = "components/gossip", _temp2);
// export default Index;


exports.default = Gossip;

Component(require('../npm/@tarojs/taro-swan/index.js').default.createComponent(Gossip));