'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/azriel/projects/ws-server/components/ActionEmitter/index.js';

var ActionEmitter = function ActionEmitter(_ref) {
  var clickCb = _ref.clickCb,
      action = _ref.action;

  var handleClick = function handleClick() {
    return clickCb(action);
  };

  return _react2.default.createElement('button', { style: {
      width: '100%',
      height: '50px',
      fontSize: '20px',
      margin: '5px auto'
    }, onClick: handleClick, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, action.type);
};

exports.default = ActionEmitter;