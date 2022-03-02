const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool(process.env.DATABASE_URL)

module.exports = db
