
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(637);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(600);

var _reactNoSsr = __webpack_require__(733);

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _socket = __webpack_require__(735);

var _socket2 = _interopRequireDefault(_socket);

var _index = __webpack_require__(731);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(730);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)("http://localhost:4001");

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
      _this.setState({ actions: _this.state.actions.concat([action]) });
    };

    _this.emitAction = function (action) {
      socket.emit("message", (0, _stringify2.default)(action));
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
        return _react2.default.createElement(_index4.default, {
          key: index,
          clickCb: _this2.emitAction,
          action: action
        });
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/azriel/projects/ws-server/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/azriel/projects/ws-server/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/azriel/projects/ws-server/components/ActionEmitter/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/azriel/projects/ws-server/components/ActionEmitter/index.js"); } } })();

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(600);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/azriel/projects/ws-server/components/TextEditor/index.js';


var styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    flex: 3
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 200,
    padding: 10
  },
  button: {
    marginTop: 10,
    textAlign: 'center'
  }
};

var convertObjectToText = function convertObjectToText(obj) {
  return obj.blocks.reduce(function (prev, cur) {
    return prev + cur.text;
  }, '');
};

var TextEditor = function (_React$Component) {
  (0, _inherits3.default)(TextEditor, _React$Component);

  function TextEditor(props) {
    (0, _classCallCheck3.default)(this, TextEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextEditor.__proto__ || (0, _getPrototypeOf2.default)(TextEditor)).call(this, props));

    _this.state = { editorState: _draftJs.EditorState.createEmpty() };

    _this.focus = function () {
      return _this.refs.editor.focus();
    };
    _this.onChange = function (editorState) {
      return _this.setState({ editorState: editorState });
    };
    _this.handleClick = function () {
      var obj = (0, _draftJs.convertToRaw)(_this.state.editorState.getCurrentContent());
      var str = convertObjectToText(obj);
      try {
        var action = JSON.parse(str);
        if (!action.type) {
          alert('Invalid action!');
          return;
        }
        _this.props.createAction(action);
      } catch (e) {
        alert('Invalid JSON!');
        return;
      }
    };
    return _this;
  }

  (0, _createClass3.default)(TextEditor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: styles.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('div', { style: styles.editor, onClick: this.focus, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_draftJs.Editor, {
        editorState: this.state.editorState,
        onChange: this.onChange,
        placeholder: 'input json',
        ref: 'editor',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement('input', {
        onClick: this.handleClick,
        style: styles.button,
        type: 'button',
        value: 'Log State',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }));
    }
  }]);

  return TextEditor;
}(_react2.default.Component);

exports.default = TextEditor;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/azriel/projects/ws-server/components/TextEditor/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/azriel/projects/ws-server/components/TextEditor/index.js"); } } })();

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(634);


/***/ })

},[747]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz8wNDYwOGU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWN0aW9uRW1pdHRlci9pbmRleC5qcz8wNDYwOGU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dEVkaXRvci9pbmRleC5qcz8wNDYwOGU4Iiwid2VicGFjazovLy93cyAoaWdub3JlZCk/MDQ2MDhlOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQjs7QUFDVjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRVAsSUFBTSxTQUFTLHNCQUFHOztBQUVsQixJQUFNOzthQUdGO1dBRUY7QUFIRTs7VUFLQTtZQUNBO1lBQVE7QUFGUjtBQUxGOztJQVdJO2lDQUNKOzttQkFBYzt3Q0FBQTs7OEhBQUE7O1VBT2QsZUFBZSxrQkFDYjtjQUFRLElBQ1I7WUFBSyxTQUFTLEVBQUUsU0FBUyxNQUFLLE1BQU0sUUFBUSxPQUFPLENBQ3BEO0FBVmE7O1VBWWQsYUFBYSxrQkFDWDthQUFPLEtBQUssV0FBVyx5QkFDeEI7QUFaQzs7VUFBSztlQUNNLENBQUMsRUFBRSxNQUFNLFNBQVMsU0FBUztBQUFwQztXQUVIOzs7Ozs2QkFXUTttQkFDUDs7NkJBQ0UsdUJBQUssT0FBTyxPQUNWLHdCQUFDLG9DQUNDLHNCQUFDLGlDQUFXLGNBQWMsS0FFNUIseURBQUssT0FBTyxPQUNULG1CQUFLLE1BQU0sUUFBUSxJQUFJLFVBQUMsUUFBUSxPQUFUOytCQUNyQjtlQUVDO21CQUFTLE9BQ1Q7a0JBQVE7QUFGUixTQURGO0FBU1QsU0FmRzs7Ozs7RUFuQmMsZ0JBcUNwQjs7a0JBQWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURmLElBQU0sZ0JBQWdCLDZCQUF1QjtNQUFBO01BQUEsY0FDM0M7O01BQU0sY0FBYztXQUFNLFFBQVE7QUFFbEM7O3lCQUFPLDBCQUFRO2FBRWI7Y0FDQTtnQkFDQTtjQUFRO0FBSFIsT0FJQyxTQUFTO2dCQUxMO2tCQUttQjtBQUxuQjtHQUFBLFNBTVI7QUFFRDs7a0JBQWUsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hjOzs7Ozs7O0FBRTdCLElBQU07O2dCQUdGO2FBQ0E7VUFFRjtBQUpFOztZQU1BO1lBQ0E7ZUFDQTthQUVGO0FBTEU7O2VBT0E7ZUFBVztBQURYO0FBWkY7O0FBaUJGLElBQU0sc0JBQXNCO2FBQVcsT0FBTyxPQUFPLFVBQUMsTUFBTSxLQUFQO1dBQWUsT0FBTyxJQUFJO0FBQTVDLEtBQWtEO0FBQXJGOztJQUVxQjtzQ0FDbkI7O3NCQUFZLE9BQU87d0NBQUE7OzhJQUVqQjs7VUFBSyxRQUFRLEVBQUMsYUFBYSxxQkFFM0I7O1VBQUssUUFBUTthQUFNLE1BQUssS0FBSyxPQUFPO0FBQ3BDO1VBQUssV0FBVyxVQUFDLGFBQUQ7YUFBaUIsTUFBSyxTQUFTLEVBQUMsYUFBRDtBQUMvQztVQUFLLGNBQWMsWUFDakI7VUFBTSxNQUFNLDJCQUFhLE1BQUssTUFBTSxZQUNwQztVQUFNLE1BQU0sb0JBQ1o7VUFDRTtZQUFNLFNBQVMsS0FBSyxNQUNwQjtZQUFJLENBQUMsT0FBTyxNQUNWO2dCQUNBO0FBQ0Q7QUFDRDtjQUFLLE1BQU0sYUFDWjtBQVBELFFBT0UsT0FBTyxHQUNQO2NBQ0E7QUFDRDtBQUNGO0FBZEQ7V0FlRDs7Ozs7NkJBR0M7NkJBQ0UsdUJBQUssT0FBTyxPQUFPO29CQUFuQjtzQkFDRTtBQURGO09BQUEsa0JBQ0UsdUJBQUssT0FBTyxPQUFPLFFBQVEsU0FBUyxLQUFLO29CQUF6QztzQkFDRTtBQURGO3lCQUNHO3FCQUNjLEtBQUssTUFDbEI7a0JBQVUsS0FDVjtxQkFDQTthQUFJOztvQkFKTjtzQkFPRjtBQVBFO0FBQ0U7aUJBT08sS0FDVDtlQUFPLE9BQ1A7Y0FDQTtlQUFNOztvQkFKUjtzQkFRTDtBQVJLO0FBQ0U7Ozs7O0VBcEM4QixnQkFBTTs7a0JBQXpCLFc7Ozs7Ozs7OztBQ3RCckIsZSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JTdGF0ZSB9IGZyb20gXCJkcmFmdC1qc1wiO1xuaW1wb3J0IE5vU1NSIGZyb20gXCJyZWFjdC1uby1zc3JcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5pbXBvcnQgVGV4dEVkaXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0RWRpdG9yL2luZGV4XCI7XG5pbXBvcnQgQWN0aW9uRW1pdHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BY3Rpb25FbWl0dGVyL2luZGV4XCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAxXCIpO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB3aWR0aDogXCIxMDB2d1wiXG4gIH0sXG4gIGFjdGlvbkxpc3Q6IHtcbiAgICBmbGV4OiAxLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIG1hcmdpbjogXCIyMHB4XCJcbiAgfVxufTtcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3Rpb25zOiBbeyB0eXBlOiBcInNwZWFrXCIsIHBheWxvYWQ6IHt9IH1dXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZUFjdGlvbiA9IGFjdGlvbiA9PiB7XG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aW9uczogdGhpcy5zdGF0ZS5hY3Rpb25zLmNvbmNhdChbYWN0aW9uXSkgfSk7XG4gIH07XG5cbiAgZW1pdEFjdGlvbiA9IGFjdGlvbiA9PiB7XG4gICAgc29ja2V0LmVtaXQoXCJtZXNzYWdlXCIsIEpTT04uc3RyaW5naWZ5KGFjdGlvbikpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8Tm9TU1I+XG4gICAgICAgICAgPFRleHRFZGl0b3IgY3JlYXRlQWN0aW9uPXt0aGlzLmNyZWF0ZUFjdGlvbn0gLz5cbiAgICAgICAgPC9Ob1NTUj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmFjdGlvbkxpc3R9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QWN0aW9uRW1pdHRlclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGlja0NiPXt0aGlzLmVtaXRBY3Rpb259XG4gICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJjb25zdCBBY3Rpb25FbWl0dGVyID0gKHtjbGlja0NiLCBhY3Rpb259KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gY2xpY2tDYihhY3Rpb24pXG5cbiAgcmV0dXJuIDxidXR0b24gc3R5bGU9e3tcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzUwcHgnLFxuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nXG4gIH19IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57YWN0aW9uLnR5cGV9PC9idXR0b24+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVtaXR0ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FjdGlvbkVtaXR0ZXIvaW5kZXguanMiLCJpbXBvcnQge0VkaXRvciwgRWRpdG9yU3RhdGUsIGNvbnZlcnRUb1Jhd30gZnJvbSAnZHJhZnQtanMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBmb250RmFtaWx5OiAnXFwnSGVsdmV0aWNhXFwnLCBzYW5zLXNlcmlmJyxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBmbGV4OiAzXG4gIH0sXG4gIGVkaXRvcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcbiAgICBjdXJzb3I6ICd0ZXh0JyxcbiAgICBtaW5IZWlnaHQ6IDIwMCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9LFxufTtcblxuY29uc3QgY29udmVydE9iamVjdFRvVGV4dCA9IG9iaiA9PiBvYmouYmxvY2tzLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyLnRleHQsICcnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtlZGl0b3JTdGF0ZTogRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKX07XG5cbiAgICB0aGlzLmZvY3VzID0gKCkgPT4gdGhpcy5yZWZzLmVkaXRvci5mb2N1cygpO1xuICAgIHRoaXMub25DaGFuZ2UgPSAoZWRpdG9yU3RhdGUpID0+IHRoaXMuc2V0U3RhdGUoe2VkaXRvclN0YXRlfSk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IGNvbnZlcnRUb1Jhdyh0aGlzLnN0YXRlLmVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpXG4gICAgICBjb25zdCBzdHIgPSBjb252ZXJ0T2JqZWN0VG9UZXh0KG9iailcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IEpTT04ucGFyc2Uoc3RyKVxuICAgICAgICBpZiAoIWFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgYWxlcnQoJ0ludmFsaWQgYWN0aW9uIScpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVBY3Rpb24oYWN0aW9uKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhbGVydCgnSW52YWxpZCBKU09OIScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZWRpdG9yfSBvbkNsaWNrPXt0aGlzLmZvY3VzfT5cbiAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICBlZGl0b3JTdGF0ZT17dGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbnB1dCBqc29uXCJcbiAgICAgICAgICAgIHJlZj1cImVkaXRvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFsdWU9XCJMb2cgU3RhdGVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVGV4dEVkaXRvci9pbmRleC5qcyIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHdzIChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gNzQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        