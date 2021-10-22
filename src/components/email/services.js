import * as helper from './helper';
import sendGridMail from '@sendgrid/mail';
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
require('dotenv').config();

export const notifyUsers = async(data) => {
  try {
    const recipientTemplate = helper.recipientTemplate(data);
    const kationTemplate = helper.senderTemplate(data);
    await Promise.all([
      await sendGridMail.send(recipientTemplate),
      await sendGridMail.send(kationTemplate),
    ]);
  
    return;
  } catch (error) {
    if (error.response) {
      console.error('<<<< Error email');
      console.error(error.response.body);
      throw error.response
    }
    console.error('<<<< Error sending email');
    console.error(error);
    throw error
  }
}