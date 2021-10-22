import { createPool } from 'mysql2/promise';
require('dotenv').config();

let connection = null;
const pool = {
  connectionLimit : 100,
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_NAME,
  debug    :  false,
};

const connectToDatabase = () => connection || (connection = createPool(pool));
export default (() => connectToDatabase())();
