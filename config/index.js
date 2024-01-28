require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const env = process.env.NODE_ENV;
console.log(`Node environment set to - ${env}`);

module.exports = Object.freeze({
  dbUser: process.env.DB_USER,
});
