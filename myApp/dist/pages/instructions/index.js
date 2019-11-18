"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

var _utils = require("../../assets/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Instructions = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Instructions, _BaseComponent);

  function Instructions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Instructions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Instructions.__proto__ || Object.getPrototypeOf(Instructions)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "list", "isChecked"], _this.config = {
      navigationBarTitleText: '填写须知'
    }, _this.state = {
      list: [{
        content: '请保证提交内容的客观、真实，并对此承担相应的法律责任。'
      }, {
        content: '请按照提示清晰、完整地填写相关内容，并允许本平台根据工作需要，在保护您个人权益的前提下，使用您的任何叙述。'
      }, {
        content: '请如实填写您的联系方式，以便核实相关情况，您的个人信息将被严格保密。'
      }, {
        content: '请勿重复提交，以免影响平台运行效率。'
      }, {
        content: '涉政治有害、暴力、低俗等违法和不良信息，请举报至科普中国App在线客服。'
      }],
      isChecked: false
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Instructions, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Instructions.prototype.__proto__ || Object.getPrototypeOf(Instructions.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
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
    key: "checkboxChange",
    value: function checkboxChange(e) {
      e.stopPropagation();
      this.setState(function (prevState) {
        return {
          isChecked: !prevState.isChecked
        };
      });
    }
  }, {
    key: "agreeFn",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var app_token, res, code, msg;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.stopPropagation();
                app_token = _index2.default.getStorageSync('app_token');
                _context.next = 4;
                return _utils2.default.request({
                  url: 'agreeOn',
                  method: 'post',
                  data: {
                    token: app_token
                  }
                });

              case 4:
                res = _context.sent;
                code = res.code, msg = res.msg;

                if (code === 0) {
                  _index2.default.navigateTo({
                    url: '/pages/informations/index'
                  });
                }
                _index2.default.showToast({
                  title: msg,
                  icon: 'none',
                  mask: true,
                  duration: _utils2.default.showToastTime
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function agreeFn(_x) {
        return _ref2.apply(this, arguments);
      }

      return agreeFn;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          _state$list = _state.list,
          list = _state$list === undefined ? [] : _state$list,
          isChecked = _state.isChecked;

      var anonymousState__temp = (0, _index4.default)('self_btn', isChecked ? '' : 'unsubmit');
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Instructions;
}(_index.Component), _class.$$events = ["checkboxChange", "agreeFn"], _class.$$componentPath = "pages/instructions/index", _temp2);
// export default Index;


exports.default = Instructions;

Page(require('../../npm/@tarojs/taro-swan/index.js').default.createComponent(Instructions, true));