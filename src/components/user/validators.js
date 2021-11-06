import Ajv from 'ajv';

const schema = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    description: { type: 'string' },
    industry: { type: 'string' },
    service: { type: 'string' },
    company_size: { type: 'string' },
    has_technology: { type: 'boolean' },
    current_technology: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    contact_number: { type: 'string' },
    subscription: { type: 'boolean' },
  },
  required: [
    'name',
    'email',
    'contact_number',
    'type'
  ],
};

const ajv = new Ajv();
const compileSchema = ajv.compile(schema);

export const validateUserInput = (info) => {
  const isUserInputValid = compileSchema(info);

  if (!isUserInputValid) {
    const [error] = compileSchema.errors;
    console.log(`<<< userInput error: ${error}`);
    throw error;
  }
};
