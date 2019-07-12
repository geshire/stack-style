"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _mustache = _interopRequireDefault(require("mustache"));

var createCSS =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(config, fileName, fileData) {
    var icons, template, params;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            icons = [];
            _context.next = 3;
            return _fs["default"].promises.readFile("".concat(__dirname, "/../template.icon.mustache"), "utf8");

          case 3:
            template = _context.sent;
            params = {
              datauri: encodeURIComponent(fileData),
              prefix: '.icon',
              name: fileName
            };
            icons.push({
              fileName: fileName,
              css: _mustache["default"].render(template, params)
            });
            config.colors.map(function (color) {
              params.name = "".concat(fileName, "-").concat(color.name);
              params.datauri = encodeURIComponent(fileData.replace(/(fill=\"\#).{3,6}(\")/gi, "fill=\"".concat(color.hex, "\"")));
              icons.push({
                fileName: params.name,
                css: _mustache["default"].render(template, params)
              });
            });
            return _context.abrupt("return", icons);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createCSS(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = createCSS;
exports["default"] = _default;