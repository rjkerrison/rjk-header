"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _links = _interopRequireDefault(require("./links"));

require("./styles/header.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Header = function Header(_ref) {
  var mainHeading = _ref.mainHeading;

  var displayLinks = _links["default"].map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        url = _ref3[0],
        text = _ref3[1];

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: url,
        children: text
      })
    }, url);
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
    id: "rjk-shared-header",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "inner",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        children: mainHeading || 'Robin James Kerrison'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          children: displayLinks
        })
      })]
    })
  });
};

var _default = Header;
exports["default"] = _default;