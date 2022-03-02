const db = require('../db_config')
require('dotenv').config()
const { aesEncrypt, aesDecrypt } = require('../encryption')

//decrypted GET message
// const msgGet = (req, res) => {
//   const sql = 'SELECT * FROM message'
//   db.query(sql, (err, result) => {
//     if (err || result.length === 0) {
//       return res.status(404).json({ success: false, message: '404 Not Found' })
//     }
//     return res.status(200).json({
//       success: true,
//       result: result.map((value) => {
//         let { id_msg, iv, name, email, message } = value

//         name = aesDecrypt(
//           '256',
//           'cbc',
//           { iv: iv, encryptedData: name },
//           process.env.key
//         )
//         email = aesDecrypt(
//           '256',
//           'cbc',
//           { iv: iv, encryptedData: email },
//           process.env.key
//         )
//         message = aesDecrypt(
//           '256',
//           'cbc',
//           { iv: iv, encryptedData: message },
//           process.env.key
//         )

//         return {
//           id_msg: id_msg,
//           name: name,
//           email: email,
//           message: message,
//         }
//       }),
//     })
//   })
// }

const msgGet = (req, res) => {
  const sql = 'SELECT * FROM message'
  db.query(sql, (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).json({ success: false, message: '404 Not Found' })
    }
    return res.status(200).json({
      success: true,
      result: result.map((value) => {
        const { id_msg, name, email, message } = value
        return {
          id_msg: id_msg,
          name: name,
          email: email,
          message: message,
        }
      }),
    })
  })
}

const msgPost = (req, res) => {
  const { name, email, message } = req.body

  let iv, encName, encEmail, encMessage

  iv = aesEncrypt('256', 'cbc', name, process.env.key).iv
  encName = aesEncrypt('256', 'cbc', name, process.env.key).encryptedData
  encEmail = aesEncrypt('256', 'cbc', email, process.env.key).encryptedData
  encMessage = aesEncrypt('256', 'cbc', message, process.env.key).encryptedData

  const sql =
    'INSERT INTO message (iv, name, email, message) VALUES (?, ?, ?, ?)'
  if (iv && encName && encEmail && encMessage) {
    db.query(sql, [iv, encName, encEmail, encMessage], (err, result) => {
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
  msgGet,
  msgPost,
}
