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

var createSvg =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(config, iconsDirectory, distDirectory) {
    var svgList, files;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            svgList = [];
            _context3.prev = 1;
            _context3.next = 4;
            return _fs["default"].promises.readdir(iconsDirectory);

          case 4:
            files = _context3.sent;
            files.map(
            /*#__PURE__*/
            function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(file) {
                var fileName, fileData, css;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (file.substr(-4).match(/.svg|.png/)) {
                          _context2.next = 2;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 2:
                        fileName = file.split('.svg')[0];
                        _context2.next = 5;
                        return _fs["default"].promises.readFile("".concat(iconsDirectory, "/").concat(file), "utf8");

                      case 5:
                        fileData = _context2.sent;
                        _context2.next = 8;
                        return (0, _createCSS["default"])(config, fileName, fileData);

                      case 8:
                        css = _context2.sent;
                        css.forEach(
                        /*#__PURE__*/
                        function () {
                          var _ref3 = (0, _asyncToGenerator2["default"])(
                          /*#__PURE__*/
                          _regenerator["default"].mark(function _callee(item) {
                            return _regenerator["default"].wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return _fs["default"].promises.writeFile("".concat(distDirectory, "/icons/").concat(item.fileName, ".css"), item.css);

                                  case 2:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x5) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.error("Error occured while reading directory!", _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function createSvg(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = createSvg;
exports["default"] = _default;