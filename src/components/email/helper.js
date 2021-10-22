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
    templateId: 'd-efea585a776d4c7ba17aca1d3193662f',
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
    subject: 'Confirmed Partnering with Kation Technologies 2',
    templateId: 'd-efea585a776d4c7ba17aca1d3193662f',
    dynamic_template_data: { 
      emailAddress,
      contactNumber,
      companySize,
      hasTechnology,
      currentTechnology,
      industry,
      service,
      name,
      type,
      description,
    },
  };
}