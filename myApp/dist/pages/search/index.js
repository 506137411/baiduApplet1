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

var Search = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Search, _BaseComponent);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "isNull", "currentValue", "count"], _this.config = {
      navigationBarTitleText: '科学辟谣'
    }, _this.state = {
      isNull: true,
      currentValue: '',
      count: 0
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), "_constructor", this).call(this, props);

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
    key: "inputChange",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var res, count;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                this.setState({
                  currentValue: e.target.value,
                  isNull: !e.target.value.trim().length
                });
                _context.next = 4;
                return _utils2.default.request({
                  url: 'getRumorList',
                  method: 'post',
                  data: {
                    keywords: e.target.value
                  }
                });

              case 4:
                res = _context.sent;
                count = res.count;

                this.setState({
                  count: Number(count)
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                console.log(_context.t0, "dfgsdgsdgdfsgdsgdsf");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function inputChange(_x) {
        return _ref2.apply(this, arguments);
      }

      return inputChange;
    }()
  }, {
    key: "inputBlur",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function inputBlur(_x2) {
        return _ref3.apply(this, arguments);
      }

      return inputBlur;
    }()
  }, {
    key: "clearKeyWords",
    value: function clearKeyWords() {
      this.setState({
        currentValue: '',
        isNull: true
      });
    }
  }, {
    key: "keypress",
    value: function keypress(e) {
      if (e.keyCode === 13) {
        this.searchHandler(e);
      }
    }
  }, {
    key: "searchHandler",
    value: function searchHandler(e) {
      e.stopPropagation();
      var _state = this.state,
          currentValue = _state.currentValue,
          count = _state.count;

      if (count) {
        _index2.default.navigateTo({
          url: "/pages/authority/index?keywords=" + currentValue
        });
      } else {
        _index2.default.navigateTo({
          url: '/pages/authority/index'
        });
      }
    }
  }, {
    key: "_createTipData",
    value: function _createTipData(_$uid) {
      var _this2 = this;

      return function () {
        var _state2 = _this2.state,
            isNull = _state2.isNull,
            count = _state2.count;

        return {
          isNull: isNull,
          count: count
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var anonymousState__temp = this._createTipData(__prefix + "cfzzzzzzzz")();

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Search;
}(_index.Component), _class.$$events = ["inputChange", "inputBlur", "keypress", "clearKeyWords", "searchHandler"], _class.$$componentPath = "pages/search/index", _temp2);
// export default Index;


exports.default = Search;

Page(require('../../npm/@tarojs/taro-swan/index.js').default.createComponent(Search, true));