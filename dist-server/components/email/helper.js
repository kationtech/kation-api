"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.senderTemplate = exports.recipientTemplate = void 0;

require('dotenv').config();

var recipientTemplate = function recipientTemplate(user) {
  var emailAddress = user.email,
      contactNumber = user.contact_number;
  return {
    to: emailAddress,
    from: process.env.NO_REPLY_EMAIL,
    subject: 'Confirmed Partnering with Kation Technologies',
    templateId: process.env.WELCOME_USER_TEMPLATE_ID,
    dynamic_template_data: {
      emailAddress: emailAddress,
      contactNumber: contactNumber
    }
  };
};

exports.recipientTemplate = recipientTemplate;

var senderTemplate = function senderTemplate(sender) {
  var emailAddress = sender.email,
      contactNumber = sender.contact_number,
      companySize = sender.company_size,
      hasTechnology = sender.has_technology,
      currentTechnology = sender.current_technology,
      industry = sender.industry,
      service = sender.service,
      name = sender.name,
      type = sender.type,
      description = sender.description;
  var checkTechnology = null;

  if (hasTechnology === true) {
    checkTechnology = 'YES';
  } else if (hasTechnology === false) {
    checkTechnology = 'NO';
  }

  return {
    to: process.env.SENDER_EMAIL,
    from: process.env.NO_REPLY_EMAIL,
    subject: 'Confirmed Partnering with Kation Technologies',
    templateId: process.env.NEW_USER_TEMPLATE_ID,
    dynamic_template_data: {
      emailAddress: emailAddress,
      contactNumber: contactNumber,
      companySize: companySize,
      hasTechnology: checkTechnology,
      currentTechnology: currentTechnology,
      industry: industry,
      service: service,
      name: name,
      type: type.toUpperCase(),
      description: description
    }
  };
};

exports.senderTemplate = senderTemplate;