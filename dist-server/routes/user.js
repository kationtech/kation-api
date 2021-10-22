"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("../components/user/index"));

var router = _express["default"].Router();

router.post('/register', [_index["default"].registerUser]);
var _default = router;
exports["default"] = _default;