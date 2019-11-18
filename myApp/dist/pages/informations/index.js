"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

var _utils = require("../../assets/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Informations = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Informations, _BaseComponent);

  function Informations() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Informations);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Informations.__proto__ || Object.getPrototypeOf(Informations)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "titleInputValue", "textareaValue", "linkInputValue", "originInputValue", "textareaMaxLength", "codebtn"], _this.config = {
      navigationBarTitleText: '提交信息'
    }, _this.state = {
      codebtn: true,
      titleInputValue: '',
      linkInputValue: '',
      originInputValue: '',
      textareaValue: '',
      textareaMaxLength: 1000

    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Informations, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Informations.prototype.__proto__ || Object.getPrototypeOf(Informations.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "isUrl",
    value: function isUrl(url) {
      return (/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(url)
      );
    }
  }, {
    key: "addRumor",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _state, titleInputValue, linkInputValue, originInputValue, textareaValue, app_token, res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _state = this.state, titleInputValue = _state.titleInputValue, linkInputValue = _state.linkInputValue, originInputValue = _state.originInputValue, textareaValue = _state.textareaValue;
                app_token = _index2.default.getStorageSync('app_token');

                if (titleInputValue.trim()) {
                  _context2.next = 6;
                  break;
                }

                _index2.default.showToast({
                  title: '标题不能为空',
                  icon: 'none',
                  duration: 2000
                });
                return _context2.abrupt("return", false);

              case 6:
                if (textareaValue.trim()) {
                  _context2.next = 9;
                  break;
                }

                _index2.default.showToast({
                  title: '谣言内容为空',
                  icon: 'none',
                  duration: 2000
                });
                return _context2.abrupt("return", false);

              case 9:
                if (!(linkInputValue.trim() && !this.isUrl(linkInputValue))) {
                  _context2.next = 12;
                  break;
                }

                _index2.default.showToast({
                  title: '请输入正确的谣言链接地址',
                  icon: 'none',
                  duration: 2000
                });
                return _context2.abrupt("return", false);

              case 12:
                _context2.next = 14;
                return _utils2.default.request({
                  url: 'addRumor',
                  method: 'post',
                  data: {
                    title: titleInputValue,
                    content: textareaValue,
                    rumor_url: linkInputValue,
                    origin: originInputValue,
                    token: app_token
                  }
                });

              case 14:
                res = _context2.sent;

                if (res.code === 0) {
                  _index2.default.navigateTo({
                    url: '/pages/history/index'
                  });
                } else {
                  _index2.default.showToast({
                    title: res.msg,
                    icon: 'none',
                    mask: true,
                    duration: _utils2.default.showToastTime
                  });
                }
                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](0);

                _index2.default.showToast({
                  title: _context2.t0.msg,
                  icon: 'none',
                  mask: true,
                  duration: _utils2.default.showToastTime
                });

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 18]]);
      }));

      function addRumor() {
        return _ref3.apply(this, arguments);
      }

      return addRumor;
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
    key: "goToHistoryList",
    value: function goToHistoryList() {
      _index2.default.navigateTo({
        url: '/pages/history/index'
      });
      // Taro.switchTab({
      //     url: '/pages/history/index',
      // })
      // console.log(process.env.TARO_ENV)
    }
  }, {
    key: "titleInputChange",
    value: function titleInputChange(e) {
      this.setState({
        titleInputValue: e.target.value
      });
    }
  }, {
    key: "linkInputChange",
    value: function linkInputChange(e) {
      this.setState({
        linkInputValue: e.target.value
      });
    }
  }, {
    key: "originInputChange",
    value: function originInputChange(e) {
      this.setState({
        originInputValue: e.target.value
      });
    }
  }, {
    key: "textareaChange",
    value: function textareaChange(e) {
      this.setState({
        textareaValue: e.target.value
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state2 = this.__state,
          textareaValue = _state2.textareaValue,
          codebtn = _state2.codebtn,
          titleInputValue = _state2.titleInputValue,
          linkInputValue = _state2.linkInputValue,
          originInputValue = _state2.originInputValue,
          textareaMaxLength = _state2.textareaMaxLength;

      var anonymousState__temp = (0, _index4.default)('self_btn', codebtn ? '' : 'unsubmit');
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Informations;
}(_index.Component), _class.$$events = ["goToHistoryList", "titleInputChange", "textareaChange", "linkInputChange", "originInputChange", "addRumor"], _class.$$componentPath = "pages/informations/index", _temp2);
// export default Index;


exports.default = Informations;

Page(require('../../npm/@tarojs/taro-swan/index.js').default.createComponent(Informations, true));