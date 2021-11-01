require('dotenv').config();

export const recipientTemplate = (user) => {
  const {
    email: emailAddress,
    contact_number: contactNumber,
  } = user;
  
  return {
    to: emailAddress,
    from: process.env.NO_REPLY_EMAIL,
    subject: 'Confirmed Partnering with Kation Technologies',
    templateId: process.env.WELCOME_USER_TEMPLATE_ID,
    dynamic_template_data: { 
      emailAddress, 
      contactNumber
    },
  };
}
  
export const senderTemplate = (sender) => {
  const {
    email: emailAddress,
    contact_number: contactNumber,
    company_size: companySize,
    has_technology: hasTechnology,
    current_technology: currentTechnology,
    industry,
    service,
    name,
    type,
    description,
  } = sender;

  return {
    to: process.env.SENDER_EMAIL,
    from: process.env.NO_REPLY_EMAIL,
    subject: 'Confirmed Partnering with Kation Technologies',
    templateId: process.env.NEW_USER_TEMPLATE_ID,
    dynamic_template_data: { 
      emailAddress,
      contactNumber,
      companySize,
      hasTechnology: hasTechnology ? 'Yes':'No',
      currentTechnology,
      industry,
      service,
      name,
      type,
      description,
    },
  };
}