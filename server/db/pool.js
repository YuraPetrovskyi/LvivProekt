const { Pool } = require('pg');
// ============================= 2 only for localhost
// const userNameENV = process.env.user;
// const password = process.env.password;

const pool = new Pool({
  user: process.env.user,
  host: 'localhost',
  database: 'LvivProekt',
  password: process.env.password,
  port: 5432,
})

module.exports = {
  pool,
};