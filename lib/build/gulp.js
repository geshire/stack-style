"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _gulp = _interopRequireWildcard(require("gulp"));

var _gulpClean = _interopRequireDefault(require("gulp-clean"));

var _gulpFlatten = _interopRequireDefault(require("gulp-flatten"));

var _gulpFile = _interopRequireDefault(require("gulp-file"));

var _gulpIf = _interopRequireDefault(require("gulp-if"));

var _gulpInsert = _interopRequireDefault(require("gulp-insert"));

var _gulpSass = _interopRequireDefault(require("gulp-sass"));

var _createSassConfig = _interopRequireDefault(require("./createSassConfig"));

var _create = _interopRequireDefault(require("../svg/create"));

var _async = _interopRequireDefault(require("async"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default(curDir, config, dir, opts) {
  var options = _objectSpread({
    compressed: false,
    flattened: false
  }, opts);

  var cleanDirectories = function cleanDirectories(cb) {
    _gulp["default"].src(["".concat(dir, "/dist/*")], {
      read: false
    }).pipe((0, _gulpClean["default"])());

    cb();
  };

  var createFolderStructure = function createFolderStructure(cb) {
    _gulp["default"].src('*.*', {
      read: false
    }).pipe(_gulp["default"].dest("".concat(dir, "/dist"))).pipe(_gulp["default"].dest("".concat(dir, "/dist/icons")));

    cb();
  };

  var createConfig = function createConfig(cb) {
    // need to validate the config...
    (0, _gulpFile["default"])([{
      name: "config.scss",
      source: (0, _createSassConfig["default"])(config)
    }], {
      src: true
    }).pipe(_gulp["default"].dest("".concat(curDir, "/styles")));
    cb();
  };

  var copyConfig = function copyConfig(cb) {
    _gulp["default"].src("".concat(curDir, "/styles/*.scss")).pipe(_gulp["default"].dest("".concat(dir, "/dist")));

    cb();
  };

  var compileCSS = function compileCSS(cb) {
    _gulp["default"].src("".concat(curDir, "/styles/*/*.scss")).pipe((0, _gulpIf["default"])(!!config.scope, _gulpInsert["default"].prepend(".".concat(config.scope, "-style {")))).pipe((0, _gulpIf["default"])(!!config.scope, _gulpInsert["default"].append('}'))).pipe((0, _gulpSass["default"])({
      outputStyle: options.compressed ? "compressed" : "expanded"
    })).pipe((0, _gulpIf["default"])(!!options.flattend, (0, _gulpFlatten["default"])())).pipe(_gulp["default"].dest("".concat(dir, "/dist")));

    cb();
  };

  var generateSvg =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(cb) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _create["default"])(config.icons, "".concat(dir, "/assets/").concat(config.icons.directory), "".concat(dir, "/dist"));

            case 2:
              cb();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function generateSvg(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  _async["default"].series([cleanDirectories, createFolderStructure, createConfig, copyConfig, compileCSS, generateSvg]);
};

exports["default"] = _default;