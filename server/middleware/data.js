const db = require('../db_config')

const grabData = (req, res, next) => {
  const exp = 'SELECT * FROM experiences'

  db.query(exp, (err, result) => {
    if (err) throw err
    req.exp = result
    next()
  })
}

module.exports = grabData
