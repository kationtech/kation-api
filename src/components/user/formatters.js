const formatKeys = (data, keys) =>  {
  const information = [];
  Object.entries(data).forEach(([key, value]) => {
    if (keys.includes(key)) {
      information.push({ key, value});
    }
  });
  return information;
}

export const userCompany = (company) => {
  const keys =  [
    'industry',
    'service',
    'company_size',
    'has_technology',
    'current_technology'
  ];
  return formatKeys(company, keys);
}

export const userType = (type) => {
  const keys =  ['type', 'description'];
  return formatKeys(type, keys);
}

export const userInfo = (info) => {
  const keys =  ['name', 'email', 'contact_number', 'company_id', 'user_type_id'];
  return formatKeys(info, keys);
}