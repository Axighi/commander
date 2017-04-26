
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(703);

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

var _draftJs = __webpack_require__(590);

var _reactNoSsr = __webpack_require__(696);

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _index = __webpack_require__(694);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(702);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/azriel/projects/ws-server/pages/index.js?entry';


var styles = {
  root: {
    display: 'flex',
    width: '100vw'
  },
  actionList: {
    flex: 1,
    border: '1px solid #ccc',
    margin: '20px'
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
      console.log((0, _stringify2.default)(action));
    };

    _this.state = {
      actions: [{ type: 'speak', payload: {} }]
    };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { style: styles.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_reactNoSsr2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_index2.default, { createAction: this.createAction, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), _react2.default.createElement('div', { style: styles.actionList, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.state.actions.map(function (action, index) {
        return _react2.default.createElement(_index4.default, { key: index, clickCb: _this2.emitAction, action: action, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
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

/***/ 694:
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

var _draftJs = __webpack_require__(590);

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

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(611);


/***/ }),

/***/ 702:
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

/***/ })

},[701]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9lMTNlZDZiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dEVkaXRvci9pbmRleC5qcz9lMTNlZDZiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWN0aW9uRW1pdHRlci9pbmRleC5qcz9lMTNlZDZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdCOztBQUNUOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7O0FBRVAsSUFBTTs7YUFHRjtXQUVGO0FBSEU7O1VBS0E7WUFDQTtZQUFRO0FBRlI7QUFMRjs7SUFXSTtpQ0FDSjs7bUJBQWM7d0NBQUE7OzhIQUFBOztVQVNkLGVBQWUsVUFBQyxRQUNkO2NBQVEsSUFDUjtZQUFLLFNBQVMsRUFBQyxTQUFTLE1BQUssTUFBTSxRQUFRLE9BQU8sQ0FDbkQ7QUFaYTs7VUFjZCxhQUFhLFVBQUMsUUFDWjtjQUFRLElBQUkseUJBQ2I7QUFkQzs7VUFBSztlQUNNLENBQ1AsRUFBQyxNQUFNLFNBQVMsU0FBUztBQUQzQjtXQUlIOzs7Ozs2QkFXUTttQkFDUDs7NkJBQ0UsdUJBQUssT0FBTyxPQUFPO29CQUFuQjtzQkFDRTtBQURGO09BQUEsa0JBQ0c7O29CQUFEO3NCQUNFO0FBREY7QUFBQSx5QkFDRyxpQ0FBVyxjQUFjLEtBQUs7b0JBQS9CO3NCQUVGO0FBRkU7MkJBRUYsdUJBQUssT0FBTyxPQUFPO29CQUFuQjtzQkFDRztBQURIO2NBQ1EsTUFBTSxRQUFRLElBQUksVUFBQyxRQUFRLE9BQVQ7K0JBQ3JCLGlDQUFjLEtBQUssT0FBTyxTQUFTLE9BQUssWUFBWSxRQUFRO3NCQUE3RDt3QkFBQTtBQUFBO1NBQUE7QUFLVDs7Ozs7RUFoQ2lCLGdCQW1DcEI7O2tCQUFlLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRGM7Ozs7Ozs7QUFFN0IsSUFBTTs7Z0JBR0Y7YUFDQTtVQUVGO0FBSkU7O1lBTUE7WUFDQTtlQUNBO2FBRUY7QUFMRTs7ZUFPQTtlQUFXO0FBRFg7QUFaRjs7QUFpQkYsSUFBTSxzQkFBc0I7YUFBVyxPQUFPLE9BQU8sVUFBQyxNQUFNLEtBQVA7V0FBZSxPQUFPLElBQUk7QUFBNUMsS0FBa0Q7QUFBckY7O0lBRXFCO3NDQUNuQjs7c0JBQVksT0FBTzt3Q0FBQTs7OElBRWpCOztVQUFLLFFBQVEsRUFBQyxhQUFhLHFCQUUzQjs7VUFBSyxRQUFRO2FBQU0sTUFBSyxLQUFLLE9BQU87QUFDcEM7VUFBSyxXQUFXLFVBQUMsYUFBRDthQUFpQixNQUFLLFNBQVMsRUFBQyxhQUFEO0FBQy9DO1VBQUssY0FBYyxZQUNqQjtVQUFNLE1BQU0sMkJBQWEsTUFBSyxNQUFNLFlBQ3BDO1VBQU0sTUFBTSxvQkFDWjtVQUNFO1lBQU0sU0FBUyxLQUFLLE1BQ3BCO1lBQUksQ0FBQyxPQUFPLE1BQ1Y7Z0JBQ0E7QUFDRDtBQUNEO2NBQUssTUFBTSxhQUNaO0FBUEQsUUFPRSxPQUFPLEdBQ1A7Y0FDQTtBQUNEO0FBQ0Y7QUFkRDtXQWVEOzs7Ozs2QkFHQzs2QkFDRSx1QkFBSyxPQUFPLE9BQU87b0JBQW5CO3NCQUNFO0FBREY7T0FBQSxrQkFDRSx1QkFBSyxPQUFPLE9BQU8sUUFBUSxTQUFTLEtBQUs7b0JBQXpDO3NCQUNFO0FBREY7eUJBQ0c7cUJBQ2MsS0FBSyxNQUNsQjtrQkFBVSxLQUNWO3FCQUNBO2FBQUk7O29CQUpOO3NCQU9GO0FBUEU7QUFDRTtpQkFPTyxLQUNUO2VBQU8sT0FDUDtjQUNBO2VBQU07O29CQUpSO3NCQVFMO0FBUks7QUFDRTs7Ozs7RUFwQzhCLGdCQUFNOztrQkFBekIsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnJCLElBQU0sZ0JBQWdCLDZCQUF1QjtNQUFBO01BQUEsY0FDM0M7O01BQU0sY0FBYztXQUFNLFFBQVE7QUFFbEM7O3lCQUFPLDBCQUFRO2FBRWI7Y0FDQTtnQkFDQTtjQUFRO0FBSFIsT0FJQyxTQUFTO2dCQUxMO2tCQUttQjtBQUxuQjtHQUFBLFNBTVI7QUFFRDs7a0JBQWUsYyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZGl0b3IsIEVkaXRvclN0YXRlfSBmcm9tICdkcmFmdC1qcydcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InXG5cbmltcG9ydCBUZXh0RWRpdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dEVkaXRvci9pbmRleCdcbmltcG9ydCBBY3Rpb25FbWl0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQWN0aW9uRW1pdHRlci9pbmRleCdcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwdncnXG4gIH0sXG4gIGFjdGlvbkxpc3Q6IHtcbiAgICBmbGV4OiAxLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcbiAgICBtYXJnaW46ICcyMHB4J1xuICB9XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgIHt0eXBlOiAnc3BlYWsnLCBwYXlsb2FkOiB7fX1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVBY3Rpb24gPSAoYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWN0aW9uKVxuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGlvbnM6IHRoaXMuc3RhdGUuYWN0aW9ucy5jb25jYXQoW2FjdGlvbl0pfSlcbiAgfVxuXG4gIGVtaXRBY3Rpb24gPSAoYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYWN0aW9uKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8Tm9TU1I+XG4gICAgICAgICAgPFRleHRFZGl0b3IgY3JlYXRlQWN0aW9uPXt0aGlzLmNyZWF0ZUFjdGlvbn0gLz5cbiAgICAgICAgPC9Ob1NTUj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmFjdGlvbkxpc3R9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4KSA9PlxuICAgICAgICAgICAgPEFjdGlvbkVtaXR0ZXIga2V5PXtpbmRleH0gY2xpY2tDYj17dGhpcy5lbWl0QWN0aW9ufSBhY3Rpb249e2FjdGlvbn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IHtFZGl0b3IsIEVkaXRvclN0YXRlLCBjb252ZXJ0VG9SYXd9IGZyb20gJ2RyYWZ0LWpzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZm9udEZhbWlseTogJ1xcJ0hlbHZldGljYVxcJywgc2Fucy1zZXJpZicsXG4gICAgcGFkZGluZzogMjAsXG4gICAgZmxleDogM1xuICB9LFxuICBlZGl0b3I6IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgY3Vyc29yOiAndGV4dCcsXG4gICAgbWluSGVpZ2h0OiAyMDAsXG4gICAgcGFkZGluZzogMTAsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbn07XG5cbmNvbnN0IGNvbnZlcnRPYmplY3RUb1RleHQgPSBvYmogPT4gb2JqLmJsb2Nrcy5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldiArIGN1ci50ZXh0LCAnJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7ZWRpdG9yU3RhdGU6IEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCl9O1xuXG4gICAgdGhpcy5mb2N1cyA9ICgpID0+IHRoaXMucmVmcy5lZGl0b3IuZm9jdXMoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKGVkaXRvclN0YXRlKSA9PiB0aGlzLnNldFN0YXRlKHtlZGl0b3JTdGF0ZX0pO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBjb252ZXJ0VG9SYXcodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKVxuICAgICAgY29uc3Qgc3RyID0gY29udmVydE9iamVjdFRvVGV4dChvYmopXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBKU09OLnBhcnNlKHN0cilcbiAgICAgICAgaWYgKCFhY3Rpb24udHlwZSkge1xuICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIGFjdGlvbiEnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuY3JlYXRlQWN0aW9uKGFjdGlvbilcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYWxlcnQoJ0ludmFsaWQgSlNPTiEnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVkaXRvcn0gb25DbGljaz17dGhpcy5mb2N1c30+XG4gICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgZWRpdG9yU3RhdGU9e3RoaXMuc3RhdGUuZWRpdG9yU3RhdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5wdXQganNvblwiXG4gICAgICAgICAgICByZWY9XCJlZGl0b3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhbHVlPVwiTG9nIFN0YXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RleHRFZGl0b3IvaW5kZXguanMiLCJjb25zdCBBY3Rpb25FbWl0dGVyID0gKHtjbGlja0NiLCBhY3Rpb259KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gY2xpY2tDYihhY3Rpb24pXG5cbiAgcmV0dXJuIDxidXR0b24gc3R5bGU9e3tcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzUwcHgnLFxuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nXG4gIH19IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57YWN0aW9uLnR5cGV9PC9idXR0b24+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVtaXR0ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FjdGlvbkVtaXR0ZXIvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        