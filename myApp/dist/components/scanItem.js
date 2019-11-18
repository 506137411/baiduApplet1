"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../npm/@tarojs/taro-swan/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scanitem = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Scanitem, _BaseComponent);

  function Scanitem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Scanitem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scanitem.__proto__ || Object.getPrototypeOf(Scanitem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "loopArray21", "tag", "id", "cover", "title", "shelve_time", "expert_info", "isUpdate", "keywords", "audit_info"], _this.config = {
      navigationBarTitleText: ''
    }, _this.state = {
      isUpdate: false
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Scanitem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Scanitem.prototype.__proto__ || Object.getPrototypeOf(Scanitem.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _index2.default.RefsArray();
    }

    // static defaultProps={
    //     itemdata:{}
    // }

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isUpdate: true
      });
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return JSON.stringify(this.props || {}) === JSON.stringify(nextProps);
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(params) {
      _index2.default.navigateTo({
        url: "/pages/detail/index?id=" + params
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

      var _props = this.__props,
          title = _props.title,
          cover = _props.cover,
          keywords = _props.keywords,
          expert_info = _props.expert_info,
          audit_info = _props.audit_info,
          shelve_time = _props.shelve_time,
          id = _props.id;

      var tag = keywords || [];

      var imgStyle = {
        width: '105PX',
        height: '105PX',
        borderRadius: '5PX'
      };
      var anonymousState__temp3 = (0, _index.internal_inline_style)(imgStyle);
      var loopArray21 = tag.map(function (item, index) {
        item = {
          privateOriginal: (0, _index.internal_get_original)(item)
        };
        var loopState__temp2 = item.privateOriginal.keyword ? item.privateOriginal.keyword.substr(0, 4) : null;
        return {
          loopState__temp2: loopState__temp2,
          privateOriginal: item.privateOriginal
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        loopArray21: loopArray21,
        tag: tag,
        id: id,
        cover: cover,
        title: title,
        shelve_time: shelve_time,
        expert_info: expert_info
      });
      return this.__state;
    }
  }]);

  return Scanitem;
}(_index.Component), _class.$$events = ["navigateTo"], _class.$$componentPath = "components/scanItem", _temp2);
// Scanitem.defaultProps = {

// }

// export default Index;


exports.default = Scanitem;

Component(require('../npm/@tarojs/taro-swan/index.js').default.createComponent(Scanitem));