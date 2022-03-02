const db = require('../db_config')

const limiter = (req, res, next) => {
  const sql = 'SELECT COUNT(*) FROM message'
  db.query(sql, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: 'Something went wrong :(' })
    }
    if (result[0]['COUNT(*)'] > 1000) {
      return res.status(400).json({
        success: false,
        message: 'too many messages sent to our server, please try again later',
      })
    } else {
      next()
    }
  })
}

module.exports = limiter
