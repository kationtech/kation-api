"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifyUsers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var helper = _interopRequireWildcard(require("./helper"));

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

require('dotenv').config();

var notifyUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var recipientTemplate, kationTemplate;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            recipientTemplate = helper.recipientTemplate(data);
            kationTemplate = helper.senderTemplate(data);
            _context.t0 = Promise;
            _context.next = 6;
            return _mail["default"].send(recipientTemplate);

          case 6:
            _context.t1 = _context.sent;
            _context.next = 9;
            return _mail["default"].send(kationTemplate);

          case 9:
            _context.t2 = _context.sent;
            _context.t3 = [_context.t1, _context.t2];
            _context.next = 13;
            return _context.t0.all.call(_context.t0, _context.t3);

          case 13:
            return _context.abrupt("return");

          case 16:
            _context.prev = 16;
            _context.t4 = _context["catch"](0);

            if (!_context.t4.response) {
              _context.next = 22;
              break;
            }

            console.error('<<<< Error email');
            console.error(_context.t4.response.body);
            throw _context.t4.response;

          case 22:
            console.error('<<<< Error sending email');
            console.error(_context.t4);
            throw _context.t4;

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function notifyUsers(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.notifyUsers = notifyUsers;