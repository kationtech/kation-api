import connection from '../../database/config';
import withTransaction from '../../database/transaction';
import * as validators from './validators';
import * as formatters from './formatters';
import * as queries from './queries';
import * as email from '../email/services';

exports.registerUser  = async(req, res,) => {
  try {
    validators.validateUserInput(req.body);
    const client = await connection.getConnection();

    await withTransaction(client, async () => {
      const { body: payload } = req;
      const { text: companyQuery, values: companyValues } = queries.createUserCompany(formatters.userCompany(payload));
      const { text: userTypeQuery, values: userTypeValues } = queries.createUserType(formatters.userType(payload));

      const [
        [{ insertId: companyId }],
        [{ insertId: userTypeId }],
      ] = await Promise.all([
        client.query(companyQuery, companyValues), 
        client.query(userTypeQuery, userTypeValues)
      ]);

      const { text: userQuery, values: userValues} = queries.createNewUser(
        formatters.userInfo({
          ...payload, 
          company_id: companyId, 
          user_type_id: userTypeId 
        }));

      await client.query(userQuery, userValues);
      await email.notifyUsers(payload);
      
      return;
    })
    res.status(200).send('Success');
  } catch(err){
    console.log('ERROR', err);
    res.status(400).send(err.message);
  }
}