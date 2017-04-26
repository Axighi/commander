webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHRFZGl0b3IvaW5kZXguanM/MTVjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7Ozs7Ozs7QUFFN0IsSUFBTTs7Z0JBR0Y7YUFDQTtVQUVGO0FBSkU7O1lBTUE7WUFDQTtlQUNBO2FBRUY7QUFMRTs7ZUFPQTtlQUFXO0FBRFg7QUFaRjs7QUFpQkYsSUFBTSxzQkFBc0I7YUFBVyxPQUFPLE9BQU8sVUFBQyxNQUFNLEtBQVA7V0FBZSxPQUFPLElBQUk7QUFBNUMsS0FBa0Q7QUFBckY7O0lBRXFCO3NDQUNuQjs7c0JBQVksT0FBTzt3Q0FBQTs7OElBRWpCOztVQUFLLFFBQVEsRUFBQyxhQUFhLHFCQUUzQjs7VUFBSyxRQUFRO2FBQU0sTUFBSyxLQUFLLE9BQU87QUFDcEM7VUFBSyxXQUFXLFVBQUMsYUFBRDthQUFpQixNQUFLLFNBQVMsRUFBQyxhQUFEO0FBQy9DO1VBQUssY0FBYyxZQUNqQjtVQUFNLE1BQU0sMkJBQWEsTUFBSyxNQUFNLFlBQ3BDO1VBQU0sTUFBTSxvQkFDWjtVQUNFO1lBQU0sU0FBUyxLQUFLLE1BQ3BCO1lBQUksQ0FBQyxPQUFPLE1BQ1Y7Z0JBQ0E7QUFDRDtBQUNEO2NBQUssTUFBTSxhQUNaO0FBUEQsUUFPRSxPQUFPLEdBQ1A7Y0FDQTtBQUNEO0FBQ0Y7QUFkRDtXQWVEOzs7Ozs2QkFHQzs2QkFDRSx1QkFBSyxPQUFPLE9BQU87b0JBQW5CO3NCQUNFO0FBREY7T0FBQSxrQkFDRSx1QkFBSyxPQUFPLE9BQU8sUUFBUSxTQUFTLEtBQUs7b0JBQXpDO3NCQUNFO0FBREY7eUJBQ0c7cUJBQ2MsS0FBSyxNQUNsQjtrQkFBVSxLQUNWO3FCQUNBO2FBQUk7O29CQUpOO3NCQU9GO0FBUEU7QUFDRTtpQkFPTyxLQUNUO2VBQU8sT0FDUDtjQUNBO2VBQU07O29CQUpSO3NCQVFMO0FBUks7QUFDRTs7Ozs7RUFwQzhCLGdCQUFNOztrQkFBekIsVyIsImZpbGUiOiI1LmMzMmQ0M2Y1Yzk2ODI2MTI3YjA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvciwgRWRpdG9yU3RhdGUsIGNvbnZlcnRUb1Jhd30gZnJvbSAnZHJhZnQtanMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBmb250RmFtaWx5OiAnXFwnSGVsdmV0aWNhXFwnLCBzYW5zLXNlcmlmJyxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBmbGV4OiAzXG4gIH0sXG4gIGVkaXRvcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcbiAgICBjdXJzb3I6ICd0ZXh0JyxcbiAgICBtaW5IZWlnaHQ6IDIwMCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9LFxufTtcblxuY29uc3QgY29udmVydE9iamVjdFRvVGV4dCA9IG9iaiA9PiBvYmouYmxvY2tzLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyLnRleHQsICcnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtlZGl0b3JTdGF0ZTogRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKX07XG5cbiAgICB0aGlzLmZvY3VzID0gKCkgPT4gdGhpcy5yZWZzLmVkaXRvci5mb2N1cygpO1xuICAgIHRoaXMub25DaGFuZ2UgPSAoZWRpdG9yU3RhdGUpID0+IHRoaXMuc2V0U3RhdGUoe2VkaXRvclN0YXRlfSk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IGNvbnZlcnRUb1Jhdyh0aGlzLnN0YXRlLmVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpXG4gICAgICBjb25zdCBzdHIgPSBjb252ZXJ0T2JqZWN0VG9UZXh0KG9iailcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IEpTT04ucGFyc2Uoc3RyKVxuICAgICAgICBpZiAoIWFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgYWxlcnQoJ0ludmFsaWQgYWN0aW9uIScpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVBY3Rpb24oYWN0aW9uKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhbGVydCgnSW52YWxpZCBKU09OIScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZWRpdG9yfSBvbkNsaWNrPXt0aGlzLmZvY3VzfT5cbiAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICBlZGl0b3JTdGF0ZT17dGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbnB1dCBqc29uXCJcbiAgICAgICAgICAgIHJlZj1cImVkaXRvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFsdWU9XCJMb2cgU3RhdGVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVGV4dEVkaXRvci9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=