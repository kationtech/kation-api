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
    templateId: 'd-efea585a776d4c7ba17aca1d3193662f',
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
  return {
    to: process.env.SENDER_EMAIL,
    from: process.env.NO_REPLY_EMAIL,
    subject: 'Confirmed Partnering with Kation Technologies 2',
    templateId: 'd-efea585a776d4c7ba17aca1d3193662f',
    dynamic_template_data: {
      emailAddress: emailAddress,
      contactNumber: contactNumber,
      companySize: companySize,
      hasTechnology: hasTechnology,
      currentTechnology: currentTechnology,
      industry: industry,
      service: service,
      name: name,
      type: type,
      description: description
    }
  };
};

exports.senderTemplate = senderTemplate;