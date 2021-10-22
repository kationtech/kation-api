"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var transaction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection, callback) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log('>>>> with transaction...');
            _context.next = 4;
            return connection.beginTransaction();

          case 4:
            _context.next = 6;
            return callback();

          case 6:
            _context.next = 8;
            return connection.commit();

          case 8:
            console.log('<<<< ending...');
            _context.next = 16;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log('>>>> rollback...');
            connection.rollback();
            throw _context.t0;

          case 16:
            _context.prev = 16;
            console.log('<<<< closing...');
            _context.next = 20;
            return connection.release();

          case 20:
            return _context.finish(16);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11, 16, 21]]);
  }));

  return function transaction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = transaction;
exports["default"] = _default;