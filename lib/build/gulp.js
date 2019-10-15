"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _gulp = _interopRequireDefault(require("gulp"));

var _gulpClean = _interopRequireDefault(require("gulp-clean"));

var _gulpFlatten = _interopRequireDefault(require("gulp-flatten"));

var _gulpFile = _interopRequireDefault(require("gulp-file"));

var _gulpIf = _interopRequireDefault(require("gulp-if"));

var _gulpCleanCss = _interopRequireDefault(require("gulp-clean-css"));

var _gulpInsert = _interopRequireDefault(require("gulp-insert"));

var _gulpAutoprefixer = _interopRequireDefault(require("gulp-autoprefixer"));

var _gulpConcat = _interopRequireDefault(require("gulp-concat"));

var _gulpSass = _interopRequireDefault(require("gulp-sass"));

var _createSassConfig = _interopRequireDefault(require("./createSassConfig"));

var _create = _interopRequireDefault(require("../svg/create"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10(curDir, config, dir, opts) {
    var options, deleteFile, deleteDir, cleanDirectories, createFolderStructure, createConfig, compileCSS, compileCustomCSS, generateSvg, compileIconCSS;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            options = _objectSpread({
              compressed: false,
              flattened: false
            }, opts);

            deleteFile =
            /*#__PURE__*/
            function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(file) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _fs["default"].promises.unlink(file);

                      case 2:
                        return _context.abrupt("return", _context.sent);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function deleteFile(_x5) {
                return _ref2.apply(this, arguments);
              };
            }();

            deleteDir =
            /*#__PURE__*/
            function () {
              var _ref3 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee3(localDir) {
                var files, deleteFiles;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _fs["default"].promises.readdir(localDir);

                      case 3:
                        files = _context3.sent;

                        deleteFiles =
                        /*#__PURE__*/
                        function () {
                          var _ref4 = (0, _asyncToGenerator2["default"])(
                          /*#__PURE__*/
                          _regenerator["default"].mark(function _callee2(files) {
                            return _regenerator["default"].wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return Promise.all(files.map(function (file) {
                                      return deleteFile("".concat(localDir, "/").concat(file));
                                    }));

                                  case 2:
                                    return _context2.abrupt("return", _context2.sent);

                                  case 3:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function deleteFiles(_x7) {
                            return _ref4.apply(this, arguments);
                          };
                        }();

                        _context3.next = 7;
                        return deleteFiles(files);

                      case 7:
                        _context3.next = 9;
                        return _fs["default"].promises.rmdir(localDir);

                      case 9:
                        _context3.next = 14;
                        break;

                      case 11:
                        _context3.prev = 11;
                        _context3.t0 = _context3["catch"](0);
                        console.error("Error cleaning directory!", _context3.t0);

                      case 14:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[0, 11]]);
              }));

              return function deleteDir(_x6) {
                return _ref3.apply(this, arguments);
              };
            }();

            cleanDirectories =
            /*#__PURE__*/
            function () {
              var _ref5 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee6() {
                var directoryItems, deleteItem, deleteItems;
                return _regenerator["default"].wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        console.log("clean directories");
                        _context6.next = 3;
                        return _fs["default"].promises.readdir("".concat(dir, "/dist"));

                      case 3:
                        directoryItems = _context6.sent;

                        deleteItem =
                        /*#__PURE__*/
                        function () {
                          var _ref6 = (0, _asyncToGenerator2["default"])(
                          /*#__PURE__*/
                          _regenerator["default"].mark(function _callee4(item) {
                            var file, stat;
                            return _regenerator["default"].wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    file = "".concat(dir, "/dist/").concat(item);
                                    _context4.next = 3;
                                    return _fs["default"].promises.lstat(file);

                                  case 3:
                                    stat = _context4.sent;

                                    if (!stat.isFile()) {
                                      _context4.next = 10;
                                      break;
                                    }

                                    _context4.next = 7;
                                    return deleteFile(file);

                                  case 7:
                                    return _context4.abrupt("return", _context4.sent);

                                  case 10:
                                    _context4.next = 12;
                                    return deleteDir(file);

                                  case 12:
                                    return _context4.abrupt("return", _context4.sent);

                                  case 13:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4);
                          }));

                          return function deleteItem(_x8) {
                            return _ref6.apply(this, arguments);
                          };
                        }();

                        deleteItems =
                        /*#__PURE__*/
                        function () {
                          var _ref7 = (0, _asyncToGenerator2["default"])(
                          /*#__PURE__*/
                          _regenerator["default"].mark(function _callee5(items) {
                            return _regenerator["default"].wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    _context5.next = 2;
                                    return Promise.all(items.map(function (item) {
                                      return deleteItem(item);
                                    }));

                                  case 2:
                                    return _context5.abrupt("return", _context5.sent);

                                  case 3:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5);
                          }));

                          return function deleteItems(_x9) {
                            return _ref7.apply(this, arguments);
                          };
                        }();

                        _context6.next = 8;
                        return deleteItems(directoryItems);

                      case 8:
                        return _context6.abrupt("return", _context6.sent);

                      case 9:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function cleanDirectories() {
                return _ref5.apply(this, arguments);
              };
            }();

            createFolderStructure =
            /*#__PURE__*/
            function () {
              var _ref8 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee7() {
                return _regenerator["default"].wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        console.log('create folder structure');
                        _context7.next = 3;
                        return _fs["default"].promises.mkdir("".concat(dir, "/dist/icons"));

                      case 3:
                        return _context7.abrupt("return", _context7.sent);

                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function createFolderStructure() {
                return _ref8.apply(this, arguments);
              };
            }();

            createConfig = function createConfig() {
              console.log('create config'); // need to validate the config...

              (0, _gulpFile["default"])([{
                name: "config.scss",
                source: (0, _createSassConfig["default"])(config)
              }], {
                src: true
              }).pipe(_gulp["default"].dest("".concat(curDir, "/styles"))).pipe(_gulp["default"].dest("".concat(dir, "/dist")));
            };

            compileCSS = function compileCSS() {
              console.log('compile css');
              var files = ["".concat(curDir, "/styles/*/*.scss")];

              _gulp["default"].src(files).pipe((0, _gulpIf["default"])(!!config.scope, _gulpInsert["default"].prepend(".".concat(config.scope, "-style {")))).pipe((0, _gulpIf["default"])(!!config.scope, _gulpInsert["default"].append('}'))).pipe((0, _gulpSass["default"])({
                outputStyle: options.compressed ? "compressed" : "expanded"
              })).pipe((0, _gulpIf["default"])(!!options.flattend, (0, _gulpFlatten["default"])())).pipe((0, _gulpAutoprefixer["default"])({
                overrideBrowsersList: ['last 2 versions'],
                cascade: false
              })).pipe((0, _gulpCleanCss["default"])({
                level: {
                  2: {
                    restructureRules: true
                  }
                }
              })).pipe(_gulp["default"].dest("".concat(dir, "/dist"))).pipe((0, _gulpConcat["default"])('styles.min.css')).pipe(_gulp["default"].dest("".concat(dir, "/dist")));
            };

            compileCustomCSS = function compileCustomCSS() {
              console.log('compile custom css');
              var files = [];

              if (!opts.customCSS) {
                return;
              }

              opts.customCSS.forEach(function (path) {
                files.push(path);
              });

              _gulp["default"].src(files).pipe((0, _gulpIf["default"])(!!config.scope, _gulpInsert["default"].prepend(".".concat(config.scope, "-style {")))).pipe((0, _gulpIf["default"])(!!config.scope, _gulpInsert["default"].append('}'))).pipe((0, _gulpSass["default"])({
                outputStyle: options.compressed ? "compressed" : "expanded"
              })).pipe((0, _gulpAutoprefixer["default"])({
                overrideBrowsersList: ['last 2 versions'],
                cascade: false
              })).pipe(_gulp["default"].dest("".concat(dir, "/dist"))).pipe((0, _gulpCleanCss["default"])()).pipe((0, _gulpConcat["default"])('styles.custom.min.css')).pipe(_gulp["default"].dest("".concat(dir, "/dist")));
            };

            generateSvg =
            /*#__PURE__*/
            function () {
              var _ref9 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee8() {
                return _regenerator["default"].wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        console.log('generate svg');
                        _context8.next = 3;
                        return (0, _create["default"])(config.colors, config.icons, "".concat(dir, "/assets/").concat(config.icons.directory), "".concat(dir, "/dist"));

                      case 3:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));

              return function generateSvg() {
                return _ref9.apply(this, arguments);
              };
            }();

            compileIconCSS =
            /*#__PURE__*/
            function () {
              var _ref10 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee9() {
                return _regenerator["default"].wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        console.log('compile icon css');

                        _gulp["default"].src("".concat(dir, "/dist/icons/*.css")).pipe((0, _gulpCleanCss["default"])()).pipe((0, _gulpConcat["default"])('icons.min.css')).pipe(_gulp["default"].dest("".concat(dir, "/dist")));

                      case 2:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));

              return function compileIconCSS() {
                return _ref10.apply(this, arguments);
              };
            }();

            _context10.next = 12;
            return cleanDirectories();

          case 12:
            _context10.next = 14;
            return createFolderStructure();

          case 14:
            _context10.next = 16;
            return createConfig();

          case 16:
            _context10.next = 18;
            return compileCSS();

          case 18:
            _context10.next = 20;
            return compileCustomCSS();

          case 20:
            _context10.next = 22;
            return generateSvg();

          case 22:
            _context10.next = 24;
            return compileIconCSS();

          case 24:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;