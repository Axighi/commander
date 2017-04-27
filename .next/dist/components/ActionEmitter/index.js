"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionEmitter = function ActionEmitter(_ref) {
  var clickCb = _ref.clickCb,
      action = _ref.action;

  var handleClick = function handleClick() {
    return clickCb(action);
  };

  return _react2.default.createElement("button", {
    style: {
      width: "80%",
      height: "50px",
      fontSize: "20px",
      margin: "5px auto"
    },
    onClick: handleClick
  }, action.type);
};

exports.default = ActionEmitter;