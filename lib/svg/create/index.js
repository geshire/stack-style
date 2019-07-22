"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _createCSS = _interopRequireDefault(require("./createCSS"));

var _generateIconList = _interopRequireDefault(require("./generateIconList"));

var _lodash = require("lodash");

var createSvg =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(colors, config, iconsDirectory, distDirectory) {
    var svgList, isValid, files, parseFile, writeFile, getList, getData, writeCSS, data, list;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            svgList = [];

            isValid = function isValid(file) {
              if (!file.substr(-4).match(/.svg|.png/)) {
                return;
              }

              return file.split('.svg')[0];
            };

            _context6.prev = 2;
            _context6.next = 5;
            return _fs["default"].promises.readdir(iconsDirectory);

          case 5:
            files = _context6.sent;

            parseFile =
            /*#__PURE__*/
            function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(file) {
                var fileName, fileData;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (file.substr(-4).match(/.svg|.png/)) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return");

                      case 2:
                        fileName = file.split('.svg')[0];
                        _context.next = 5;
                        return _fs["default"].promises.readFile("".concat(iconsDirectory, "/").concat(file), "utf8");

                      case 5:
                        fileData = _context.sent;
                        _context.next = 8;
                        return (0, _createCSS["default"])(colors, config, fileName, fileData);

                      case 8:
                        return _context.abrupt("return", _context.sent);

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function parseFile(_x5) {
                return _ref2.apply(this, arguments);
              };
            }();

            writeFile =
            /*#__PURE__*/
            function () {
              var _ref3 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(item) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _fs["default"].promises.writeFile("".concat(distDirectory, "/icons/").concat(item.fileName, ".css"), item.css);

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function writeFile(_x6) {
                return _ref3.apply(this, arguments);
              };
            }();

            getList =
            /*#__PURE__*/
            function () {
              var _ref4 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee3() {
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return Promise.all(files.map(function (file) {
                          return isValid(file);
                        }));

                      case 2:
                        return _context3.abrupt("return", _context3.sent);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function getList() {
                return _ref4.apply(this, arguments);
              };
            }();

            getData =
            /*#__PURE__*/
            function () {
              var _ref5 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee4() {
                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return Promise.all(files.map(function (file) {
                          return parseFile(file);
                        }));

                      case 2:
                        return _context4.abrupt("return", _context4.sent);

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function getData() {
                return _ref5.apply(this, arguments);
              };
            }();

            writeCSS =
            /*#__PURE__*/
            function () {
              var _ref6 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee5(data) {
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return Promise.all(data.map(function (item) {
                          return writeFile(item);
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

              return function writeCSS(_x7) {
                return _ref6.apply(this, arguments);
              };
            }();

            _context6.t0 = _lodash.compact;
            _context6.t1 = _lodash.flatten;
            _context6.next = 15;
            return getData();

          case 15:
            _context6.t2 = _context6.sent;
            _context6.t3 = (0, _context6.t1)(_context6.t2);
            data = (0, _context6.t0)(_context6.t3);
            _context6.next = 20;
            return writeCSS(data);

          case 20:
            _context6.t4 = _lodash.compact;
            _context6.t5 = _lodash.flatten;
            _context6.next = 24;
            return getList();

          case 24:
            _context6.t6 = _context6.sent;
            _context6.t7 = (0, _context6.t5)(_context6.t6);
            list = (0, _context6.t4)(_context6.t7);
            _context6.next = 29;
            return (0, _generateIconList["default"])(distDirectory, list);

          case 29:
            return _context6.abrupt("return", _context6.sent);

          case 32:
            _context6.prev = 32;
            _context6.t8 = _context6["catch"](2);
            console.error("Error occured while reading directory!", _context6.t8);

          case 35:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 32]]);
  }));

  return function createSvg(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var _default = createSvg;
exports["default"] = _default;