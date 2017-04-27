
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz81Mjg3ZjJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWN0aW9uRW1pdHRlci9pbmRleC5qcz81Mjg3ZjJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dEVkaXRvci9pbmRleC5qcz81Mjg3ZjJkIiwid2VicGFjazovLy93cyAoaWdub3JlZCk/NTI4N2YyZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQjs7QUFDVjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRVAsSUFBTSxTQUFTLHNCQUNiLEtBQXlCLEdBQ3JCLDBCQUNBOztBQUdOLElBQU07O2FBR0Y7V0FFRjtBQUhFOztVQUtBO1lBQ0E7WUFBUTtBQUZSO0FBTEY7O0lBV0k7aUNBQ0o7O21CQUFjO3dDQUFBOzs4SEFBQTs7VUFPZCxlQUFlLGtCQUNiO2NBQVEsSUFDUjtZQUFLLFNBQVMsRUFBRSxTQUFTLE1BQUssTUFBTSxRQUFRLE9BQU8sQ0FDcEQ7QUFWYTs7VUFZZCxhQUFhLGtCQUNYO2FBQU8sS0FBSyxXQUFXLHlCQUN4QjtBQVpDOztVQUFLO2VBQ00sQ0FBQyxFQUFFLE1BQU0sU0FBUyxTQUFTO0FBQXBDO1dBRUg7Ozs7OzZCQVdRO21CQUNQOzs2QkFDRSx1QkFBSyxPQUFPLE9BQ1Ysd0JBQUMsb0NBQ0Msc0JBQUMsaUNBQVcsY0FBYyxLQUU1Qix5REFBSyxPQUFPLE9BQ1QsbUJBQUssTUFBTSxRQUFRLElBQUksVUFBQyxRQUFRLE9BQVQ7K0JBQ3JCO2VBRUM7bUJBQVMsT0FDVDtrQkFBUTtBQUZSLFNBREY7QUFTVCxTQWZHOzs7OztFQW5CYyxnQkFxQ3BCOztrQkFBZSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGYsSUFBTSxnQkFBZ0IsNkJBQXVCO01BQUE7TUFBQSxjQUMzQzs7TUFBTSxjQUFjO1dBQU0sUUFBUTtBQUVsQzs7eUJBQU8sMEJBQVE7YUFFYjtjQUNBO2dCQUNBO2NBQVE7QUFIUixPQUlDLFNBQVM7Z0JBTEw7a0JBS21CO0FBTG5CO0dBQUEsU0FNUjtBQUVEOztrQkFBZSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGM7Ozs7Ozs7QUFFN0IsSUFBTTs7Z0JBR0Y7YUFDQTtVQUVGO0FBSkU7O1lBTUE7WUFDQTtlQUNBO2FBRUY7QUFMRTs7ZUFPQTtlQUFXO0FBRFg7QUFaRjs7QUFpQkYsSUFBTSxzQkFBc0I7YUFBVyxPQUFPLE9BQU8sVUFBQyxNQUFNLEtBQVA7V0FBZSxPQUFPLElBQUk7QUFBNUMsS0FBa0Q7QUFBckY7O0lBRXFCO3NDQUNuQjs7c0JBQVksT0FBTzt3Q0FBQTs7OElBRWpCOztVQUFLLFFBQVEsRUFBQyxhQUFhLHFCQUUzQjs7VUFBSyxRQUFRO2FBQU0sTUFBSyxLQUFLLE9BQU87QUFDcEM7VUFBSyxXQUFXLFVBQUMsYUFBRDthQUFpQixNQUFLLFNBQVMsRUFBQyxhQUFEO0FBQy9DO1VBQUssY0FBYyxZQUNqQjtVQUFNLE1BQU0sMkJBQWEsTUFBSyxNQUFNLFlBQ3BDO1VBQU0sTUFBTSxvQkFDWjtVQUNFO1lBQU0sU0FBUyxLQUFLLE1BQ3BCO1lBQUksQ0FBQyxPQUFPLE1BQ1Y7Z0JBQ0E7QUFDRDtBQUNEO2NBQUssTUFBTSxhQUNaO0FBUEQsUUFPRSxPQUFPLEdBQ1A7Y0FDQTtBQUNEO0FBQ0Y7QUFkRDtXQWVEOzs7Ozs2QkFHQzs2QkFDRSx1QkFBSyxPQUFPLE9BQU87b0JBQW5CO3NCQUNFO0FBREY7T0FBQSxrQkFDRSx1QkFBSyxPQUFPLE9BQU8sUUFBUSxTQUFTLEtBQUs7b0JBQXpDO3NCQUNFO0FBREY7eUJBQ0c7cUJBQ2MsS0FBSyxNQUNsQjtrQkFBVSxLQUNWO3FCQUNBO2FBQUk7O29CQUpOO3NCQU9GO0FBUEU7QUFDRTtpQkFPTyxLQUNUO2VBQU8sT0FDUDtjQUNBO2VBQU07O29CQUpSO3NCQVFMO0FBUks7QUFDRTs7Ozs7RUFwQzhCLGdCQUFNOztrQkFBekIsVzs7Ozs7Ozs7O0FDdEJyQixlIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3IsIEVkaXRvclN0YXRlIH0gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQgTm9TU1IgZnJvbSBcInJlYWN0LW5vLXNzclwiO1xuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5cbmltcG9ydCBUZXh0RWRpdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRFZGl0b3IvaW5kZXhcIjtcbmltcG9ydCBBY3Rpb25FbWl0dGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0FjdGlvbkVtaXR0ZXIvaW5kZXhcIjtcblxuY29uc3Qgc29ja2V0ID0gaW8oXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCJcbiAgICA/IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCJcbiAgICA6IFwiaHR0cHM6Ly93cy1zZXJ2ZXItbWhucGF2b2hzdC5ub3cuc2gvXCJcbik7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCJcbiAgfSxcbiAgYWN0aW9uTGlzdDoge1xuICAgIGZsZXg6IDEsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgbWFyZ2luOiBcIjIwcHhcIlxuICB9XG59O1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGlvbnM6IFt7IHR5cGU6IFwic3BlYWtcIiwgcGF5bG9hZDoge30gfV1cbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlQWN0aW9uID0gYWN0aW9uID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3Rpb25zOiB0aGlzLnN0YXRlLmFjdGlvbnMuY29uY2F0KFthY3Rpb25dKSB9KTtcbiAgfTtcblxuICBlbWl0QWN0aW9uID0gYWN0aW9uID0+IHtcbiAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoYWN0aW9uKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICAgIDxOb1NTUj5cbiAgICAgICAgICA8VGV4dEVkaXRvciBjcmVhdGVBY3Rpb249e3RoaXMuY3JlYXRlQWN0aW9ufSAvPlxuICAgICAgICA8L05vU1NSPlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYWN0aW9uTGlzdH0+XG4gICAgICAgICAge3RoaXMuc3RhdGUuYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxBY3Rpb25FbWl0dGVyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsaWNrQ2I9e3RoaXMuZW1pdEFjdGlvbn1cbiAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImNvbnN0IEFjdGlvbkVtaXR0ZXIgPSAoe2NsaWNrQ2IsIGFjdGlvbn0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiBjbGlja0NiKGFjdGlvbilcblxuICByZXR1cm4gPGJ1dHRvbiBzdHlsZT17e1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICBtYXJnaW46ICc1cHggYXV0bydcbiAgfX0gb25DbGljaz17aGFuZGxlQ2xpY2t9PnthY3Rpb24udHlwZX08L2J1dHRvbj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRW1pdHRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQWN0aW9uRW1pdHRlci9pbmRleC5qcyIsImltcG9ydCB7RWRpdG9yLCBFZGl0b3JTdGF0ZSwgY29udmVydFRvUmF3fSBmcm9tICdkcmFmdC1qcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIGZvbnRGYW1pbHk6ICdcXCdIZWx2ZXRpY2FcXCcsIHNhbnMtc2VyaWYnLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIGZsZXg6IDNcbiAgfSxcbiAgZWRpdG9yOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxuICAgIGN1cnNvcjogJ3RleHQnLFxuICAgIG1pbkhlaWdodDogMjAwLFxuICAgIHBhZGRpbmc6IDEwLFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG59O1xuXG5jb25zdCBjb252ZXJ0T2JqZWN0VG9UZXh0ID0gb2JqID0+IG9iai5ibG9ja3MucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYgKyBjdXIudGV4dCwgJycpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge2VkaXRvclN0YXRlOiBFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpfTtcblxuICAgIHRoaXMuZm9jdXMgPSAoKSA9PiB0aGlzLnJlZnMuZWRpdG9yLmZvY3VzKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IChlZGl0b3JTdGF0ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7ZWRpdG9yU3RhdGV9KTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gY29udmVydFRvUmF3KHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSlcbiAgICAgIGNvbnN0IHN0ciA9IGNvbnZlcnRPYmplY3RUb1RleHQob2JqKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gSlNPTi5wYXJzZShzdHIpXG4gICAgICAgIGlmICghYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICBhbGVydCgnSW52YWxpZCBhY3Rpb24hJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZUFjdGlvbihhY3Rpb24pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFsZXJ0KCdJbnZhbGlkIEpTT04hJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lZGl0b3J9IG9uQ2xpY2s9e3RoaXMuZm9jdXN9PlxuICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgIGVkaXRvclN0YXRlPXt0aGlzLnN0YXRlLmVkaXRvclN0YXRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImlucHV0IGpzb25cIlxuICAgICAgICAgICAgcmVmPVwiZWRpdG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YWx1ZT1cIkxvZyBTdGF0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9UZXh0RWRpdG9yL2luZGV4LmpzIiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gd3MgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA3NDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        