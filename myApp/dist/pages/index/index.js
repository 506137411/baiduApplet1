"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

// import ScanList from '../../components/scanList'
// import Authorityc from '../../components/authorityc'
// import AuthorityList from '../../components/authorityList'


var _index = require("../../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

var _utils = require("../../assets/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__21", "$compid__22", "list", "currentIndex", "navList", "isgranted"], _this.config = {
      navigationBarTitleText: '科学辟谣'
    }, _this.state = {
      list: [{
        url: "/assets/images/authority7@2x.png",
        id: 1
      }, {
        url: "/assets/images/rumour8@2x.png",
        id: 2
      }, {
        url: "/assets/images/authority_c9@2x.png",
        id: 3
      }],
      currentIndex: 0,
      navList: [{
        id: 1,
        title: '综合排序'
      }, {
        id: 2,
        title: '距离近'
      }, {
        id: 3,
        title: '销量'
      }, {
        id: 4,
        title: '价格排序'
      }],
      isgranted: false
    }, _this.customComponents = ["Search", "Alist", "Gossip"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "changeNavState",
    value: function changeNavState(v) {
      this.setState(function () {
        return {
          currentIndex: v
        };
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var data = _index2.default.getStorage({ key: 'app_phone' });
      data.then(function (res) {
        _this2.setState({
          isgranted: res.data === '' ? false : true
        });
      });
    }
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
    key: "navHandler",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index, e) {
        var checkToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.stopPropagation();

                _context.t0 = index;
                _context.next = _context.t0 === 0 ? 4 : _context.t0 === 1 ? 6 : 8;
                break;

              case 4:
                _index2.default.navigateTo({
                  url: '/pages/authority/index'
                });
                return _context.abrupt("break", 12);

              case 6:
                _index2.default.navigateTo({
                  url: '/pages/rumortest/index'
                });
                return _context.abrupt("break", 12);

              case 8:
                _context.next = 10;
                return _utils2.default.checkToken();

              case 10:
                checkToken = _context.sent;

                if (checkToken) {
                  _utils2.default.checkSession();
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function navHandler(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return navHandler;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__21"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__21 = _genCompid2[0],
          $compid__21 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__22"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__22 = _genCompid4[0],
          $compid__22 = _genCompid4[1];

      var _state$list = this.__state.list,
          list = _state$list === undefined ? [] : _state$list;

      _index.propsManager.set({
        "isIndex": true,
        "currentIndex": 0
      }, $compid__21, $prevCompid__21);
      _index.propsManager.set({
        "isIndex": "true"
      }, $compid__22, $prevCompid__22);
      Object.assign(this.__state, {
        $compid__21: $compid__21,
        $compid__22: $compid__22
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["navHandler"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Page(require('../../npm/@tarojs/taro-swan/index.js').default.createComponent(Index, true));