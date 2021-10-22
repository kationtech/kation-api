const fieldNames = (items) => items.map(( { key: fieldName} ) => fieldName);
const fieldValues = (items) => items.map(( {value} ) => value);
const parameterizedQuery = (items) => items.map(result => '?')

export const createUserCompany = (company) => {
  const text = `INSERT INTO company 
    ( ${fieldNames(company)} ) 
	  VALUES ( ${parameterizedQuery(company).join(',')})`;
    
  const values = fieldValues(company);
  return { text, values };
}

export const createUserType = (user) => {
  const text = `INSERT INTO user_type 
    ( ${fieldNames(user)} ) 
    VALUES ( ${parameterizedQuery(user).join(',')})`;
  
const values = fieldValues(user);
return { text, values };
}

export const createNewUser = (user) => {
    const text = `INSERT INTO user
      ( ${fieldNames(user)} ) 
      VALUES ( ${parameterizedQuery(user).join(',')})`;
    
  const values = fieldValues(user);
  return { text, values };
}