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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var phone14 = "/assets/images/phone14@2x.png";
var verificationCode3 = "/assets/images/verificationCode3@2x.png";
// import password15 from './../../assets/images/password15@2x.png'
// import classNames from 'classnames'

var Login = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "phone14", "phone", "verificationCode3", "verificationCode", "codeinfo", "codebtn"], _this.config = {
      navigationBarTitleText: '绑定手机号'
    }, _this.state = {
      codeinfo: '发送验证码',
      phone: '',
      verificationCode: '',
      codebtn: false
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "phoneHandler",
    value: function phoneHandler(e) {
      this.setState({
        phone: e.target.value
      });
    }
  }, {
    key: "verificationCodeHandler",
    value: function verificationCodeHandler(e) {
      this.setState({
        verificationCode: e.target.value
      });
    }
  }, {
    key: "sendSMS",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var phone, app_token, i, regex, res, msg, t;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                phone = this.state.phone;
                app_token = _index2.default.getStorageSync('app_token');
                i = 60;
                regex = /^1[3456789]\d{9}$/;

                if (regex.test(phone)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", false);

              case 6:
                _context.next = 8;
                return _utils2.default.request({
                  url: 'sendVerifySms',
                  method: 'post',
                  data: {
                    mobile: phone,
                    country_code: '86',
                    token: app_token
                  }
                });

              case 8:
                res = _context.sent;
                msg = res.msg;

                _index2.default.showToast({
                  title: msg,
                  icon: 'none',
                  mask: true,
                  duration: _utils2.default.showToastTime
                });

                t = setInterval(function () {
                  if (i > 0) {
                    _this2.setState({
                      codeinfo: --i + 's'
                    });
                  } else {
                    _this2.setState({
                      codeinfo: '发送验证码'
                    });
                    clearInterval(t);
                  }
                }, 1000);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendSMS() {
        return _ref2.apply(this, arguments);
      }

      return sendSMS;
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var phone = this.$router.params.phone;


      this.setState({
        phone: phone || ''
      });
      // checkSession()
    }
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
    key: "checkPhone",
    value: function checkPhone(e) {
      e.stopPropagation();
      var phone = this.state.phone;

      var phoneValue = phone.trim();
      if (phoneValue === '') {
        _index2.default.showToast({
          title: '请输入手机号',
          icon: 'none',
          duration: 2000
        });
        return false;
      } else if (!/^1[3456789]\d{9}$/.test(phoneValue)) {
        _index2.default.showToast({
          title: '请输入正确的手机格式',
          icon: 'none',
          duration: 2000
        });
        return false;
      }
      return true;
    }
  }, {
    key: "checkCode",
    value: function checkCode(e) {
      e.stopPropagation();
      var verificationCode = this.state.verificationCode;

      var code = verificationCode.trim();
      if (code === '') {
        _index2.default.showToast({
          title: '请输入验证码',
          icon: 'none',
          duration: 2000
        });
        return false;
      } else if (!/^\d{4,6}$/.test(code)) {
        _index2.default.showToast({
          title: '请输入正确的验证码',
          icon: 'none',
          duration: 2000
        });
        return false;
      }
      return true;
    }
  }, {
    key: "getPhoneNumber",
    value: function getPhoneNumber(e) {
      console.log('用户手机号:', e);
    }
  }, {
    key: "submit",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var _state, phone, verificationCode, app_token, regex, res, code, msg;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.stopPropagation();
                _state = this.state, phone = _state.phone, verificationCode = _state.verificationCode;
                app_token = _index2.default.getStorageSync('app_token');
                regex = /^1[3456789]\d{9}$/;

                if (regex.test(phone)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", false);

              case 6:
                _context2.next = 8;
                return _utils2.default.request({
                  url: 'bindAccount',
                  method: 'post',
                  data: {
                    mobile: phone,
                    verify: verificationCode,
                    token: app_token
                  }
                });

              case 8:
                res = _context2.sent;
                code = res.code, msg = res.msg;

                if (Number(code) === 0) {
                  _index2.default.navigateTo({
                    url: '/pages/instructions/index'
                  });
                } else {
                  _index2.default.showToast({
                    title: msg,
                    icon: 'none',
                    mask: true,
                    duration: _utils2.default.showToastTime
                  });
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function submit(_x) {
        return _ref3.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state2 = this.__state,
          phone = _state2.phone,
          verificationCode = _state2.verificationCode,
          codebtn = _state2.codebtn,
          codeinfo = _state2.codeinfo;

      var imgStyle = {
        width: '18PX',
        height: '21PX'
      };
      var anonymousState__temp = (0, _index.internal_inline_style)(imgStyle);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(imgStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        phone14: phone14,
        verificationCode3: verificationCode3
      });
      return this.__state;
    }
  }]);

  return Login;
}(_index.Component), _class.$$events = ["phoneHandler", "checkPhone", "verificationCodeHandler", "checkCode", "sendSMS", "submit"], _class.$$componentPath = "pages/login/index", _temp2);
// export default Index;


exports.default = Login;

Page(require('../../npm/@tarojs/taro-swan/index.js').default.createComponent(Login, true));