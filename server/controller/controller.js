const db = require('../db_config')

const dataGet = (req, res) => {
  const sql = 'SELECT * FROM skills'

  db.query(sql, (err, result) => {
    if (err) throw err
    return res.status(200).json({
      success: true,
      result: {
        experiences: req.exp,
        skills: result,
      },
    })
  })
}

module.exports = { dataGet }
