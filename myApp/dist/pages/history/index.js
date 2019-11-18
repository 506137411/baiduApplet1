"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

// import { request } from '../../assets/utils'


var _index = require("../../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

var _utils = require("../../assets/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = (_temp2 = _class = function (_BaseComponent) {
  _inherits(History, _BaseComponent);

  function History() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, History);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = History.__proto__ || Object.getPrototypeOf(History)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray25", "historylist", "historyImgUrl", "page", "page_size"], _this.config = {
      navigationBarTitleText: '提交记录'
    }, _this.state = {
      historylist: [
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // },
        // {
        //     "content": "浙大科学家创造可编造的塑料",
        //     "time": "2019.01.30"
        // }
      ],
      historyImgUrl: "/assets/images/history4@2x.png",
      page: 1,
      page_size: 20
    }, _this.customComponents = ["Hitem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(History, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(History.prototype.__proto__ || Object.getPrototypeOf(History.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "getUserRumorList",
    value: function getUserRumorList(options) {
      return new Promise(function (resolve) {
        var res = _utils2.default.request({
          url: 'getUserRumorList',
          method: 'post',
          data: options && options.data || {}
        });
        resolve(res);
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _state, page, page_size, app_token, rumorListOption, res, _res$list, list, msg;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _state = this.state, page = _state.page, page_size = _state.page_size;
                app_token = _index2.default.getStorageSync('app_token');
                rumorListOption = {
                  data: {
                    page: page,
                    page_size: page_size,
                    token: app_token
                  }
                };
                _context.next = 6;
                return this.getUserRumorList(rumorListOption);

              case 6:
                res = _context.sent;
                _res$list = res.list, list = _res$list === undefined ? [] : _res$list;

                this.setState({
                  historylist: list
                });
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                msg = _context.t0.msg;

                _index2.default.showToast({
                  title: msg,
                  icon: 'none',
                  mask: true,
                  duration: _utils2.default.showToastTime
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
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
    key: "onScroll",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var _state2, page, page_size, historylist, app_token, rumorListOption, res, _res$list2, list;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.stopPropagation();
                _state2 = this.state, page = _state2.page, page_size = _state2.page_size, historylist = _state2.historylist;
                app_token = _index2.default.getStorageSync('app_token');
                rumorListOption = {
                  data: {
                    page: page,
                    page_size: page_size,
                    token: app_token
                  }
                };
                _context2.next = 6;
                return this.getUserRumorList(rumorListOption);

              case 6:
                res = _context2.sent;
                _res$list2 = res.list, list = _res$list2 === undefined ? [] : _res$list2;

                this.setState({
                  historylist: [].concat(_toConsumableArray(historylist), _toConsumableArray(list))
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onScroll(_x) {
        return _ref3.apply(this, arguments);
      }

      return onScroll;
    }()
  }, {
    key: "addItem",
    value: function addItem() {
      this.setState(function (prevState, props) {
        return {
          historylist: [].concat(_toConsumableArray(prevState.historylist), [{
            content: '浙大科学家创造可编造的塑料',
            time: '2019.01.30'
          }])
        };
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

      var _state3 = this.__state,
          _state3$historylist = _state3.historylist,
          historylist = _state3$historylist === undefined ? [] : _state3$historylist,
          historyImgUrl = _state3.historyImgUrl;


      var imgStyle = {
        width: '151PX',
        height: '84PX'
      };
      var anonymousState__temp = (0, _index.internal_inline_style)(imgStyle);
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ 'height': '130PX', width: '100%' });
      var loopArray25 = historylist.map(function (item, index) {
        item = {
          privateOriginal: (0, _index.internal_get_original)(item)
        };

        var _genCompid = (0, _index.genCompid)(__prefix + "cgzzzzzzzz" + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__20 = _genCompid2[0],
            $compid__20 = _genCompid2[1];

        _index.propsManager.set(_extends({}, item.privateOriginal, {
          "index": index
        }), $compid__20, $prevCompid__20);
        return {
          $compid__20: $compid__20,
          privateOriginal: item.privateOriginal
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray25: loopArray25
      });
      return this.__state;
    }
  }]);

  return History;
}(_index.Component), _class.$$events = ["onScroll"], _class.$$componentPath = "pages/history/index", _temp2);
// export default Index;


exports.default = History;

Page(require('../../npm/@tarojs/taro-swan/index.js').default.createComponent(History, true));