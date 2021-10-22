const transaction = async (connection, callback) => {
  try {
    console.log('>>>> with transaction...')
    await connection.beginTransaction();
    await callback();
    await connection.commit();
    console.log('<<<< ending...')
  } catch ( err ) {
    console.log('>>>> rollback...')
    connection.rollback();
    throw err;
  } finally {
    console.log('<<<< closing...')
    await connection.release();
  }
}

export default transaction;