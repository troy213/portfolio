const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
})

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

const skillsGet = (req, res) => {
  const sql = 'SELECT * FROM skills'
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(404).json({ success: false, message: err })
    }
    return res.status(200).json({ success: true, result: result })
  })
}

const skillsGetId = (req, res) => {
  const id = req.params.id
  const sql = 'SELECT * FROM skills WHERE type=?'
  db.query(sql, id, (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).json({ success: false, message: '404 Not Found' })
    }
    return res.status(200).json({ success: true, result: result })
  })
}

const msgGet = (req, res) => {
  const sql = 'SELECT * FROM message'
  db.query(sql, (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).json({ success: false, message: '404 Not Found' })
    }
    return res.status(200).json({ success: true, result: result })
  })
}

const msgPost = (req, res) => {
  const { name, email, message } = req.body
  const sql = 'INSERT INTO message (name, email, message) VALUES (?, ?, ?)'
  if (name && email && message) {
    db.query(sql, [name, email, message], (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: 'Something went wrong :(' })
      }
      return res.status(200).json({ success: true, result: result })
    })
  } else {
    return res
      .status(400)
      .json({ success: false, message: 'There is empty data' })
  }
}

module.exports = {
  expGet,
  expGetId,
  skillsGet,
  skillsGetId,
  msgGet,
  msgPost,
}
