"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _draftJs = require("draft-js");

var _reactNoSsr = require("react-no-ssr");

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _socket = require("socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

var _index = require("../components/TextEditor/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../components/ActionEmitter/index");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../components/DeleteButton/index");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)(process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://ws-server-mhnpavohst.now.sh/");

var styles = {
  root: {
    display: "flex",
    width: "100vw"
  },
  actionList: {
    flex: 1,
    border: "1px solid #ccc",
    margin: "20px"
  }
};

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

    _this.createAction = function (action) {
      console.log(action);
      if (_this.state.actions.some(function (e) {
        return e.type === action.type;
      })) {
        alert("action " + action.type + " exists!");
        return;
      }
      _this.setState({ actions: _this.state.actions.concat([action]) });
    };

    _this.emitAction = function (action) {
      socket.emit("message", (0, _stringify2.default)(action));
    };

    _this.deleteAction = function (actionId) {
      console.log(actionId);
      _this.setState({
        actions: _this.state.actions.filter(function (e) {
          return e.type !== actionId;
        })
      });
    };

    _this.state = {
      actions: [{ type: "speak", payload: {} }]
    };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("div", { style: styles.root }, _react2.default.createElement(_reactNoSsr2.default, null, _react2.default.createElement(_index2.default, { createAction: this.createAction })), _react2.default.createElement("div", { style: styles.actionList }, this.state.actions.map(function (action, index) {
        return _react2.default.createElement("div", { key: index }, _react2.default.createElement(_index4.default, { clickCb: _this2.emitAction, action: action }), _react2.default.createElement(_index6.default, { onClick: _this2.deleteAction, id: action.type }, "X"));
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;