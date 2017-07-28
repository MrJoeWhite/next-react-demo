webpackHotUpdate(5,{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = __webpack_require__(564);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(548);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = __webpack_require__(541);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(561);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joe/Documents/projects-FE/next-react/pages/index.js?entry';

var PostLink = function PostLink(props) {
    return _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement(_link2.default, {
        as: '/p/' + props.id,
        href: '/post?title=' + props.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, props.title)));
};

/*const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-next" title="Hello Next.js"/>
            <PostLink id="learn-next" title="Learn Next.js is awesome"/>
            <PostLink id="deploy-zeit" title="Deploy apps with Zeit"/>
        </ul>
    </Layout>
)*/

var Index = function Index(props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement('h1', {
        'data-jsx': 3408455235,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, 'Batman TV Shows'), _react2.default.createElement('ul', {
        'data-jsx': 3408455235,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, props.shows.map(function (_ref) {
        var show = _ref.show;
        return _react2.default.createElement('li', { key: show.id, 'data-jsx': 3408455235,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 33
            }
        }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id,
            href: '/post?id=' + show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 34
            }
        }, _react2.default.createElement('a', {
            'data-jsx': 3408455235,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 36
            }
        }, show.name)));
    })), _react2.default.createElement(_style2.default, {
        styleId: 3408455235,
        css: 'h1[data-jsx="3408455235"],a[data-jsx="3408455235"]{font-family:"Arial"}ul[data-jsx="3408455235"]{padding:0}li[data-jsx="3408455235"]{list-style:none;margin:5px 0}a[data-jsx="3408455235"]{text-decoration:none;color:blue}a[data-jsx="3408455235"]:hover{opacity:0.6}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFHcUMsQUFHVixBQUdNLEFBSUssQUFJVCxVQVZoQixFQVdBLElBUmlCLElBTmpCLENBVWUsUUFIZixHQUlBIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2UvRG9jdW1lbnRzL3Byb2plY3RzLUZFL25leHQtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmNvbnN0IFBvc3RMaW5rID0gKHByb3BzKSA9PiAoXG4gICAgPGxpPlxuICAgICAgICA8TGlua1xuICAgICAgICAgICAgYXM9e2AvcC8ke3Byb3BzLmlkfWB9XG4gICAgICAgICAgICBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbiAgICAgICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuKVxuXG4vKmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dFwiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiLz5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRcIiB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiLz5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS16ZWl0XCIgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIi8+XG4gICAgICAgIDwvdWw+XG4gICAgPC9MYXlvdXQ+XG4pKi9cblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSwgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93czogZGF0YVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;

                    console.log('Show data fetched. Count: ' + data.length);

                    return _context.abrupt('return', {
                        shows: data
                    });

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));
exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/joe/Documents/projects-FE/next-react/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/joe/Documents/projects-FE/next-react/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lNjlmMzI0YTc3M2U1ZjdkMTk5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YWI4YzEzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmNvbnN0IFBvc3RMaW5rID0gKHByb3BzKSA9PiAoXG4gICAgPGxpPlxuICAgICAgICA8TGlua1xuICAgICAgICAgICAgYXM9e2AvcC8ke3Byb3BzLmlkfWB9XG4gICAgICAgICAgICBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbiAgICAgICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuKVxuXG4vKmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dFwiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiLz5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRcIiB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiLz5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS16ZWl0XCIgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIi8+XG4gICAgICAgIDwvdWw+XG4gICAgPC9MYXlvdXQ+XG4pKi9cblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSwgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93czogZGF0YVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFEQTtBQUVBO0FBRkE7QUFFQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFIQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBa0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQVJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9