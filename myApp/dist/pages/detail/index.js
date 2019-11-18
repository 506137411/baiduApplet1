"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

// import { request } from '../../assets/utils'


var _index = require("../../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

var _utils = require("../../assets/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bdParse = require('../../bdParse/bdParse/bdParse.js');
// import '../../bdParse/bdParse/bdParse1.scss'

var detail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(detail, _BaseComponent);

  function detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = detail.__proto__ || Object.getPrototypeOf(detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["title", "shelve_time", "origin", "content", "cover"], _this.config = {
      navigationBarTitleText: '详情页'
    }, _this.state = {
      title: undefined,
      shelve_time: undefined,
      content: undefined,
      origin: undefined,
      cover: undefined
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(detail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(detail.prototype.__proto__ || Object.getPrototypeOf(detail.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, res, title, shelve_time, content, origin, cover;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                id = this.$router.params.id;
                _context.next = 4;
                return _utils2.default.request({
                  url: 'getRumorDetail',
                  data: {
                    id: id
                  },
                  method: 'post'
                });

              case 4:
                res = _context.sent;
                title = res.title, shelve_time = res.shelve_time, content = res.content, origin = res.origin, cover = res.cover;
                // const formateContent = content.replace(
                //     /\<img/gi,
                //     '<img style="display:block; max-width:100%; margin:0 auto" '
                // );

                this.setState({
                  title: title,
                  shelve_time: shelve_time,
                  content: bdParse.bdParse('article', 'html', content, this.$scope, 5),
                  origin: origin,
                  cover: cover
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
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
    key: "linkHandler",
    value: function linkHandler() {
      window.open("https://lanhuapp.com/web/#/item/project/board?pid=2f0e5e12-4208-43ac-906a-a304078105ad", "_target");
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          title = _state.title,
          shelve_time = _state.shelve_time,
          content = _state.content,
          origin = _state.origin,
          cover = _state.cover;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return detail;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/detail/index", _temp2);
exports.default = detail;

Page(require('../../npm/@tarojs/taro-swan/index.js').default.createComponent(detail, true));