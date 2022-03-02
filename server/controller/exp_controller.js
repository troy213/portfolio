const db = require('../db_config')

const expGet = (req, res) => {
  const sql = 'SELECT * FROM experiences'
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(404).json({ success: false, message: err })
    }
    return res.status(200).json({ success: true, result: result })
  })
}

const expGetId = (req, res) => {
  const id = req.params.id
  const sql = 'SELECT * FROM experiences WHERE type=?'
  db.query(sql, id, (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).json({ success: false, message: '404 Not Found' })
    }
    return res.status(200).json({ success: true, result: result })
  })
}

module.exports = {
  expGet,
  expGetId,
}
