"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userInfo = exports.userType = exports.userCompany = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var formatKeys = function formatKeys(data, keys) {
  var information = [];
  Object.entries(data).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (keys.includes(key)) {
      information.push({
        key: key,
        value: value
      });
    }
  });
  return information;
};

var userCompany = function userCompany(company) {
  var keys = ['industry', 'service', 'company_size', 'has_technology', 'current_technology'];
  return formatKeys(company, keys);
};

exports.userCompany = userCompany;

var userType = function userType(type) {
  var keys = ['type', 'description'];
  return formatKeys(type, keys);
};

exports.userType = userType;

var userInfo = function userInfo(info) {
  var keys = ['name', 'email', 'contact_number', 'company_id', 'user_type_id'];
  return formatKeys(info, keys);
};

exports.userInfo = userInfo;