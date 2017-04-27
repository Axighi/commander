
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

var _index5 = __webpack_require__(749);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)( true ? "http://localhost:4000" : "https://ws-server-mhnpavohst.now.sh/");

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

var styles = {
  root: {
    fontFamily: "'Helvetica', sans-serif",
    padding: 20,
    flex: 3
  },
  editor: {
    border: "1px solid #ccc",
    cursor: "text",
    minHeight: 200,
    padding: 10
  },
  button: {
    marginTop: 10,
    textAlign: "center"
  }
};

var convertObjectToText = function convertObjectToText(obj) {
  return obj.blocks.reduce(function (prev, cur) {
    return prev + cur.text;
  }, "");
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
          alert("Invalid action!");
          return;
        }
        _this.props.createAction(action);
      } catch (e) {
        alert("Invalid JSON!");
        return;
      }
    };
    return _this;
  }

  (0, _createClass3.default)(TextEditor, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { style: styles.root }, _react2.default.createElement("div", { style: styles.editor, onClick: this.focus }, _react2.default.createElement(_draftJs.Editor, {
        editorState: this.state.editorState,
        onChange: this.onChange,
        placeholder: "input json",
        ref: "editor"
      })), _react2.default.createElement("input", {
        onClick: this.handleClick,
        style: styles.button,
        type: "button",
        value: "Generate Action"
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


/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var onClick = _ref.onClick,
      id = _ref.id;

  var handleClick = function handleClick() {
    return onClick(id);
  };
  return _react2.default.createElement("button", { onClick: handleClick }, "X");
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/azriel/projects/ws-server/components/DeleteButton/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/azriel/projects/ws-server/components/DeleteButton/index.js"); } } })();

/***/ })

},[747]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz85MGUxODg3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWN0aW9uRW1pdHRlci9pbmRleC5qcz85MGUxODg3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dEVkaXRvci9pbmRleC5qcz85MGUxODg3Iiwid2VicGFjazovLy93cyAoaWdub3JlZCk/OTBlMTg4NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlbGV0ZUJ1dHRvbi9pbmRleC5qcz85MGUxODg3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlCOztBQUNWOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVQLElBQU0sU0FBUyxzQkFDYixLQUF5QixHQUNyQiwwQkFDQTs7QUFHTixJQUFNOzthQUdGO1dBRUY7QUFIRTs7VUFLQTtZQUNBO1lBQVE7QUFGUjtBQUxGOztJQVdJO2lDQUNKOzttQkFBYzt3Q0FBQTs7OEhBQUE7O1VBT2QsZUFBZSxrQkFDYjtjQUFRLElBQ1I7Z0JBQVMsTUFBTSxRQUFRLEtBQUs7ZUFBSyxFQUFFLFNBQVMsT0FBTztBQUEvQyxVQUNGOzBCQUFnQixPQUFPLE9BQ3ZCO0FBQ0Q7QUFDRDtZQUFLLFNBQVMsRUFBRSxTQUFTLE1BQUssTUFBTSxRQUFRLE9BQU8sQ0FDcEQ7QUFkYTs7VUFnQmQsYUFBYSxrQkFDWDthQUFPLEtBQUssV0FBVyx5QkFDeEI7QUFsQmE7O1VBb0JkLGVBQWUsb0JBQ2I7Y0FBUSxJQUNSO1lBQUs7dUJBQ1csTUFBTSxRQUFRLE9BQU87aUJBQUssRUFBRSxTQUFTO0FBRXRELFNBRlk7QUFBVDtBQXJCRjs7VUFBSztlQUNNLENBQUMsRUFBRSxNQUFNLFNBQVMsU0FBUztBQUFwQztXQUVIOzs7Ozs2QkFzQlE7bUJBQ1A7OzZCQUNFLHVCQUFLLE9BQU8sT0FDVix3QkFBQyxvQ0FDQyxzQkFBQyxpQ0FBVyxjQUFjLEtBRTVCLHlEQUFLLE9BQU8sT0FDVCxtQkFBSyxNQUFNLFFBQVEsSUFBSSxVQUFDLFFBQVEsT0FBVDtlQUN0Qix1Q0FBSyxLQUNILHlCQUFDLGlDQUFjLFNBQVMsT0FBSyxZQUFZLFFBQ3pDLDJCQUFDLGlDQUFhLFNBQVMsT0FBSyxjQUFjLElBQUksT0FBTyxRQUFyRDtBQVFYLFNBaEJHOzs7OztFQTlCYyxnQkFpRHBCOztrQkFBZSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VmLElBQU0sZ0JBQWdCLDZCQUF5QjtNQUFBO01BQUEsY0FDN0M7O01BQU0sY0FBYztXQUFNLFFBQVE7QUFFbEM7O3lCQUNFOzthQUdJO2NBQ0E7Z0JBQ0E7Y0FFRjtBQUxFO2FBT0Q7QUFSRCxHQURGLFNBWUg7QUFFRDs7a0JBQWUsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTs7OztBQUU5QixJQUFNOztnQkFHRjthQUNBO1VBRUY7QUFKRTs7WUFNQTtZQUNBO2VBQ0E7YUFFRjtBQUxFOztlQU9BO2VBQVc7QUFEWDtBQVpGOztBQWlCRixJQUFNLHNCQUFzQjthQUN0QixPQUFPLE9BQU8sVUFBQyxNQUFNLEtBQVA7V0FBZSxPQUFPLElBQUk7QUFBNUMsS0FBa0Q7QUFEcEQ7O0lBR3FCO3NDQUNuQjs7c0JBQVksT0FBTzt3Q0FBQTs7OElBRWpCOztVQUFLLFFBQVEsRUFBRSxhQUFhLHFCQUU1Qjs7VUFBSyxRQUFRO2FBQU0sTUFBSyxLQUFLLE9BQU87QUFDcEM7VUFBSyxXQUFXO2FBQWUsTUFBSyxTQUFTLEVBQUUsYUFBRjtBQUM3QztVQUFLLGNBQWMsWUFDakI7VUFBTSxNQUFNLDJCQUFhLE1BQUssTUFBTSxZQUNwQztVQUFNLE1BQU0sb0JBQ1o7VUFDRTtZQUFNLFNBQVMsS0FBSyxNQUNwQjtZQUFJLENBQUMsT0FBTyxNQUNWO2dCQUNBO0FBQ0Q7QUFDRDtjQUFLLE1BQU0sYUFDWjtBQVBELFFBT0UsT0FBTyxHQUNQO2NBQ0E7QUFDRDtBQUNGO0FBZEQ7V0FlRDs7Ozs7NkJBR0M7NkJBQ0UsdUJBQUssT0FBTyxPQUNWLCtDQUFLLE9BQU8sT0FBTyxRQUFRLFNBQVMsS0FDbEMseUJBQUM7cUJBQ2MsS0FBSyxNQUNsQjtrQkFBVSxLQUNWO3FCQUNBO2FBR0o7QUFOSTtpQkFPTyxLQUNUO2VBQU8sT0FDUDtjQUNBO2VBSVA7QUFQTyxRQVZKOzs7OztFQTFCa0MsZ0JBQU07O2tCQUF6QixXOzs7Ozs7Ozs7QUN2QnJCLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O2tCQUFlLGdCQUFxQjtNQUFBO01BQUEsVUFDbEM7O01BQU0sY0FBYztXQUFNLFFBQVE7QUFDbEM7U0FBTywwQ0FBUSxTQUFTLGVBQ3pCO0FBSEQsRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JTdGF0ZSB9IGZyb20gXCJkcmFmdC1qc1wiO1xuaW1wb3J0IE5vU1NSIGZyb20gXCJyZWFjdC1uby1zc3JcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5pbXBvcnQgVGV4dEVkaXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0RWRpdG9yL2luZGV4XCI7XG5pbXBvcnQgQWN0aW9uRW1pdHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BY3Rpb25FbWl0dGVyL2luZGV4XCI7XG5pbXBvcnQgRGVsZXRlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0RlbGV0ZUJ1dHRvbi9pbmRleFwiO1xuXG5jb25zdCBzb2NrZXQgPSBpbyhcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIlxuICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIlxuICAgIDogXCJodHRwczovL3dzLXNlcnZlci1taG5wYXZvaHN0Lm5vdy5zaC9cIlxuKTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiMTAwdndcIlxuICB9LFxuICBhY3Rpb25MaXN0OiB7XG4gICAgZmxleDogMSxcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBtYXJnaW46IFwiMjBweFwiXG4gIH1cbn07XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aW9uczogW3sgdHlwZTogXCJzcGVha1wiLCBwYXlsb2FkOiB7fSB9XVxuICAgIH07XG4gIH1cblxuICBjcmVhdGVBY3Rpb24gPSBhY3Rpb24gPT4ge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9ucy5zb21lKGUgPT4gZS50eXBlID09PSBhY3Rpb24udHlwZSkpIHtcbiAgICAgIGFsZXJ0KGBhY3Rpb24gJHthY3Rpb24udHlwZX0gZXhpc3RzIWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aW9uczogdGhpcy5zdGF0ZS5hY3Rpb25zLmNvbmNhdChbYWN0aW9uXSkgfSk7XG4gIH07XG5cbiAgZW1pdEFjdGlvbiA9IGFjdGlvbiA9PiB7XG4gICAgc29ja2V0LmVtaXQoXCJtZXNzYWdlXCIsIEpTT04uc3RyaW5naWZ5KGFjdGlvbikpO1xuICB9O1xuXG4gIGRlbGV0ZUFjdGlvbiA9IGFjdGlvbklkID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb25JZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3Rpb25zOiB0aGlzLnN0YXRlLmFjdGlvbnMuZmlsdGVyKGUgPT4gZS50eXBlICE9PSBhY3Rpb25JZClcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgPE5vU1NSPlxuICAgICAgICAgIDxUZXh0RWRpdG9yIGNyZWF0ZUFjdGlvbj17dGhpcy5jcmVhdGVBY3Rpb259IC8+XG4gICAgICAgIDwvTm9TU1I+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5hY3Rpb25MaXN0fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPEFjdGlvbkVtaXR0ZXIgY2xpY2tDYj17dGhpcy5lbWl0QWN0aW9ufSBhY3Rpb249e2FjdGlvbn0gLz5cbiAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBvbkNsaWNrPXt0aGlzLmRlbGV0ZUFjdGlvbn0gaWQ9e2FjdGlvbi50eXBlfT5cbiAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgIDwvRGVsZXRlQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiY29uc3QgQWN0aW9uRW1pdHRlciA9ICh7IGNsaWNrQ2IsIGFjdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gY2xpY2tDYihhY3Rpb24pO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjVweCBhdXRvXCJcbiAgICAgIH19XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICA+XG4gICAgICB7YWN0aW9uLnR5cGV9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25FbWl0dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BY3Rpb25FbWl0dGVyL2luZGV4LmpzIiwiaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JTdGF0ZSwgY29udmVydFRvUmF3IH0gZnJvbSBcImRyYWZ0LWpzXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIGZvbnRGYW1pbHk6IFwiJ0hlbHZldGljYScsIHNhbnMtc2VyaWZcIixcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBmbGV4OiAzXG4gIH0sXG4gIGVkaXRvcjoge1xuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIGN1cnNvcjogXCJ0ZXh0XCIsXG4gICAgbWluSGVpZ2h0OiAyMDAsXG4gICAgcGFkZGluZzogMTBcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgfVxufTtcblxuY29uc3QgY29udmVydE9iamVjdFRvVGV4dCA9IG9iaiA9PlxuICBvYmouYmxvY2tzLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyLnRleHQsIFwiXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZWRpdG9yU3RhdGU6IEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkgfTtcblxuICAgIHRoaXMuZm9jdXMgPSAoKSA9PiB0aGlzLnJlZnMuZWRpdG9yLmZvY3VzKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGVkaXRvclN0YXRlID0+IHRoaXMuc2V0U3RhdGUoeyBlZGl0b3JTdGF0ZSB9KTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gY29udmVydFRvUmF3KHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSk7XG4gICAgICBjb25zdCBzdHIgPSBjb252ZXJ0T2JqZWN0VG9UZXh0KG9iaik7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgIGlmICghYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICBhbGVydChcIkludmFsaWQgYWN0aW9uIVwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVBY3Rpb24oYWN0aW9uKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYWxlcnQoXCJJbnZhbGlkIEpTT04hXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZWRpdG9yfSBvbkNsaWNrPXt0aGlzLmZvY3VzfT5cbiAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICBlZGl0b3JTdGF0ZT17dGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbnB1dCBqc29uXCJcbiAgICAgICAgICAgIHJlZj1cImVkaXRvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFsdWU9XCJHZW5lcmF0ZSBBY3Rpb25cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9UZXh0RWRpdG9yL2luZGV4LmpzIiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gd3MgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA3NDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGRlZmF1bHQgKHsgb25DbGljaywgaWQgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IG9uQ2xpY2soaWQpO1xuICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+WDwvYnV0dG9uPjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0RlbGV0ZUJ1dHRvbi9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        