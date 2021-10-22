"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewUser = exports.createUserType = exports.createUserCompany = void 0;

var fieldNames = function fieldNames(items) {
  return items.map(function (_ref) {
    var fieldName = _ref.key;
    return fieldName;
  });
};

var fieldValues = function fieldValues(items) {
  return items.map(function (_ref2) {
    var value = _ref2.value;
    return value;
  });
};

var parameterizedQuery = function parameterizedQuery(items) {
  return items.map(function (result) {
    return '?';
  });
};

var createUserCompany = function createUserCompany(company) {
  var text = "INSERT INTO company \n    ( ".concat(fieldNames(company), " ) \n\t  VALUES ( ").concat(parameterizedQuery(company).join(','), ")");
  var values = fieldValues(company);
  return {
    text: text,
    values: values
  };
};

exports.createUserCompany = createUserCompany;

var createUserType = function createUserType(user) {
  var text = "INSERT INTO user_type \n    ( ".concat(fieldNames(user), " ) \n    VALUES ( ").concat(parameterizedQuery(user).join(','), ")");
  var values = fieldValues(user);
  return {
    text: text,
    values: values
  };
};

exports.createUserType = createUserType;

var createNewUser = function createNewUser(user) {
  var text = "INSERT INTO user\n      ( ".concat(fieldNames(user), " ) \n      VALUES ( ").concat(parameterizedQuery(user).join(','), ")");
  var values = fieldValues(user);
  return {
    text: text,
    values: values
  };
};

exports.createNewUser = createNewUser;