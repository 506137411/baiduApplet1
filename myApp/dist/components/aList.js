"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

// import { request,showToastTime } from '../assets/utils'


var _index = require("../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

var _utils = require("../assets/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _index3 = require("../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Scanlist from '../../components/scanList'
var Alist = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Alist, _BaseComponent);

  function Alist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alist.__proto__ || Object.getPrototypeOf(Alist)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray19", "current", "nav", "isIndex", "scrollLeft", "os", "currentIndex", "keywords"], _this.config = {
      navigationBarTitleText: ''
    }, _this.state = {
      current: 0,
      scrollLeft: 0,
      nav: [],
      os: _index2.default.getSystemInfoSync()
    }, _this.customComponents = ["Scanlist"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alist, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Alist.prototype.__proto__ || Object.getPrototypeOf(Alist.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "init_fn",
    value: function init_fn(options) {
      return new Promise(function (resolve) {
        var res = _utils2.default.request({
          url: 'getRumorList',
          method: 'post',
          data: options && options.data || {}
        });
        resolve(res);
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var _props, _props$isIndex, isIndex, _props$currentIndex, currentIndex, _props$keywords, keywords, navres, navlist, currentItem, rumorInitOptions, rumorListres;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _props = this.props, _props$isIndex = _props.isIndex, isIndex = _props$isIndex === undefined ? 0 : _props$isIndex, _props$currentIndex = _props.currentIndex, currentIndex = _props$currentIndex === undefined ? 0 : _props$currentIndex, _props$keywords = _props.keywords, keywords = _props$keywords === undefined ? '' : _props$keywords; //判断是否为首页\\\
                // 加载导航条

                _context.next = 4;
                return _utils2.default.request({
                  url: 'getField'
                });

              case 4:
                navres = _context.sent;
                navlist = [];
                // if (navres.code === 0) {

                navlist = (navres || []).map(function (item, index) {
                  return {
                    title: item.field_name,
                    id: item.id,
                    field_id: item.id,
                    page: 1,
                    keywords: index === 0 ? keywords : '',
                    keyword: '',
                    page_size: isIndex ? 4 : 20,
                    brdge: item.is_hot || 0,
                    rumorList: [],
                    index: index,
                    has_page: 1
                  };
                });
                // 加载内容   // field_id  ——领域id   page —-第几页    keywords  搜索关键字    keyword—关键词  page_size
                currentItem = navlist.find(function (item) {
                  return item.index === Number(currentIndex);
                });
                rumorInitOptions = {
                  data: {
                    page_size: isIndex ? 4 : 20,
                    page: 1,
                    field_id: currentItem && currentItem.id || 0,
                    keywords: currentItem && currentItem.keywords || ''
                  }
                };
                _context.next = 11;
                return this.init_fn(rumorInitOptions);

              case 11:
                rumorListres = _context.sent;

                navlist[currentIndex].rumorList = rumorListres && rumorListres.list || [];
                navlist[currentIndex].has_page = rumorListres && rumorListres.has_page || 0;
                this.setState({
                  nav: [].concat(_toConsumableArray(navlist)),
                  current: currentIndex
                });

                setTimeout(function () {
                  _this2.setState({
                    scrollLeft: _this2.calcScrollLeft(Number(currentIndex))
                  });
                }, 500);
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);

                _index2.default.showToast({
                  title: _context.t0.msg,
                  icon: 'none',
                  mask: true,
                  duration: _utils2.default.showToastTime
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 18]]);
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
    value: function componentWillUnmount() {
      // this.setState({
      // 	current: 0,
      // 	scrollLeft: 0,
      // 	nav: [],
      // 	os: Taro.getSystemInfoSync()
      // })
    }
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
    key: "calcScrollLeft",
    value: function calcScrollLeft(index) {
      var os = this.state.os;

      return (index - 2) * (os.windowWidth / 4);
    }
  }, {
    key: "navHandler",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index) {
        var _state, nav, current, isIndex, currentItem, rumorInitOptions, result, rumorList, currentRumorList;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 判断是否为首页
                _state = this.state, nav = _state.nav, current = _state.current;
                isIndex = Boolean(this.props.isIndex);

                if (!isIndex) {
                  _context2.next = 6;
                  break;
                }

                _index2.default.navigateTo({
                  url: "/pages/authority/index?current=" + index
                });
                _context2.next = 21;
                break;

              case 6:
                if (!(Number(current) === index)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", false);

              case 10:
                currentItem = nav.find(function (item) {
                  return Number(item.index) === Number(index);
                });

                if (currentItem.rumorList.length) {
                  _context2.next = 20;
                  break;
                }

                rumorInitOptions = {
                  data: {
                    page: currentItem.page,
                    page_size: currentItem.page_size,
                    field_id: currentItem && currentItem.id || 0,
                    keywords: currentItem && currentItem.keywords || ''
                  }
                };
                _context2.next = 15;
                return this.init_fn(rumorInitOptions);

              case 15:
                result = _context2.sent;
                rumorList = [].concat(_toConsumableArray(nav));
                currentRumorList = result && result.list || [];

                rumorList[index].rumorList = [].concat(_toConsumableArray(rumorList[index].rumorList), _toConsumableArray(currentRumorList));
                this.setState({
                  nav: rumorList
                });

              case 20:
                this.setState({
                  current: index,
                  scrollLeft: this.calcScrollLeft(index)
                });

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function navHandler(_x) {
        return _ref3.apply(this, arguments);
      }

      return navHandler;
    }()
  }, {
    key: "onScroll",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        var _state2, current, nav, _nav$current, field_id, page, page_size, has_page, rumorInitOptions, result, rumorList, currentRumorList;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // e.stopPropagation();
                _state2 = this.state, current = _state2.current, nav = _state2.nav;
                _nav$current = nav[current], field_id = _nav$current.field_id, page = _nav$current.page, page_size = _nav$current.page_size, has_page = _nav$current.has_page;

                if (!(Number(has_page) === 0)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", false);

              case 4:
                rumorInitOptions = {
                  data: {
                    page: page + 1,
                    page_size: page_size,
                    field_id: field_id
                  }
                };
                _context3.next = 7;
                return this.init_fn(rumorInitOptions);

              case 7:
                result = _context3.sent;
                rumorList = [].concat(_toConsumableArray(nav));
                currentRumorList = result && result.list || [];

                rumorList[current].page = rumorList[current].page + 1;
                rumorList[current].rumorList = [].concat(_toConsumableArray(rumorList[current].rumorList), _toConsumableArray(currentRumorList));
                rumorList[current].has_page = result && result.has_page || 0;
                this.setState({
                  nav: rumorList
                });

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onScroll(_x2) {
        return _ref4.apply(this, arguments);
      }

      return onScroll;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state3 = this.__state,
          _state3$nav = _state3.nav,
          nav = _state3$nav === undefined ? [] : _state3$nav,
          current = _state3.current,
          scrollLeft = _state3.scrollLeft;


      var isIndex = Boolean(this.__props.isIndex);
      var anonymousState__temp = (0, _index4.default)('container', isIndex ? 'container_i' : '');
      var anonymousState__temp2 = (0, _index4.default)('tab_container_t', isIndex ? 'tab_container_t_i' : '');
      var anonymousState__temp3 = (0, _index4.default)('tab_container_c', this.__props.isIndex ? 'tab_container_c_i' : '');
      var loopArray19 = nav.map(function (item, index) {
        item = {
          privateOriginal: (0, _index.internal_get_original)(item)
        };
        var loopState__temp5 = Number(item.privateOriginal.has_page) === 0;

        var _genCompid = (0, _index.genCompid)(__prefix + "bizzzzzzzz" + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__16 = _genCompid2[0],
            $compid__16 = _genCompid2[1];

        isIndex && _index.propsManager.set(_extends({}, item.privateOriginal), $compid__16, $prevCompid__16);

        var _genCompid3 = (0, _index.genCompid)(__prefix + "bjzzzzzzzz" + index, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__17 = _genCompid4[0],
            $compid__17 = _genCompid4[1];

        !isIndex && _index.propsManager.set(_extends({}, item.privateOriginal), $compid__17, $prevCompid__17);
        return {
          loopState__temp5: loopState__temp5,
          $compid__16: $compid__16,
          $compid__17: $compid__17,
          privateOriginal: item.privateOriginal
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray19: loopArray19,
        isIndex: isIndex
      });
      return this.__state;
    }
  }]);

  return Alist;
}(_index.Component), _class.$$events = ["navHandler", "onScroll"], _class.$$componentPath = "components/aList", _temp2);
// export default Index;


exports.default = Alist;

Component(require('../npm/@tarojs/taro-swan/index.js').default.createComponent(Alist));