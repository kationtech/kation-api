"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUserInput = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _ajv = _interopRequireDefault(require("ajv"));

var schema = {
  type: 'object',
  properties: {
    type: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    industry: {
      type: 'string'
    },
    service: {
      type: 'string'
    },
    company_size: {
      type: 'number'
    },
    has_technology: {
      type: 'boolean'
    },
    current_technology: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    contact_number: {
      type: 'string'
    },
    subscription: {
      type: 'boolean'
    }
  },
  required: ['type', 'description', 'industry', 'service', 'company_size', 'has_technology', 'name', 'email', 'contact_number', 'subscription']
};
var ajv = new _ajv["default"]();
var compileSchema = ajv.compile(schema);

var validateUserInput = function validateUserInput(info) {
  var isUserInputValid = compileSchema(info);

  if (!isUserInputValid) {
    var _compileSchema$errors = (0, _slicedToArray2["default"])(compileSchema.errors, 1),
        error = _compileSchema$errors[0];

    console.log("<<< userInput error: ".concat(error));
    throw error;
  }
};

exports.validateUserInput = validateUserInput;