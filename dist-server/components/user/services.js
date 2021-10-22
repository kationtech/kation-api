"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = _interopRequireDefault(require("../../database/config"));

var _transaction = _interopRequireDefault(require("../../database/transaction"));

var validators = _interopRequireWildcard(require("./validators"));

var formatters = _interopRequireWildcard(require("./formatters"));

var queries = _interopRequireWildcard(require("./queries"));

var email = _interopRequireWildcard(require("../email/services"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.registerUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var client;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            validators.validateUserInput(req.body);
            _context2.next = 4;
            return _config["default"].getConnection();

          case 4:
            client = _context2.sent;
            _context2.next = 7;
            return (0, _transaction["default"])(client, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
              var payload, _queries$createUserCo, companyQuery, companyValues, _queries$createUserTy, userTypeQuery, userTypeValues, _yield$Promise$all, _yield$Promise$all2, _yield$Promise$all2$, companyId, _yield$Promise$all2$2, userTypeId, _queries$createNewUse, userQuery, userValues;

              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      payload = req.body;
                      _queries$createUserCo = queries.createUserCompany(formatters.userCompany(payload)), companyQuery = _queries$createUserCo.text, companyValues = _queries$createUserCo.values;
                      _queries$createUserTy = queries.createUserType(formatters.userType(payload)), userTypeQuery = _queries$createUserTy.text, userTypeValues = _queries$createUserTy.values;
                      _context.next = 5;
                      return Promise.all([client.query(companyQuery, companyValues), client.query(userTypeQuery, userTypeValues)]);

                    case 5:
                      _yield$Promise$all = _context.sent;
                      _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 2);
                      _yield$Promise$all2$ = (0, _slicedToArray2["default"])(_yield$Promise$all2[0], 1);
                      companyId = _yield$Promise$all2$[0].insertId;
                      _yield$Promise$all2$2 = (0, _slicedToArray2["default"])(_yield$Promise$all2[1], 1);
                      userTypeId = _yield$Promise$all2$2[0].insertId;
                      _queries$createNewUse = queries.createNewUser(formatters.userInfo(_objectSpread(_objectSpread({}, payload), {}, {
                        company_id: companyId,
                        user_type_id: userTypeId
                      }))), userQuery = _queries$createNewUse.text, userValues = _queries$createNewUse.values;
                      _context.next = 14;
                      return client.query(userQuery, userValues);

                    case 14:
                      _context.next = 16;
                      return email.notifyUsers(payload);

                    case 16:
                      return _context.abrupt("return");

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 7:
            res.status(200).send('Success');
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log('ERROR', _context2.t0);
            res.status(400).send(_context2.t0.message);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();