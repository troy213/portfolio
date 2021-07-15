const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
require('dotenv').config()
PORT = process.env.PORT

app.use([cors(), express.urlencoded({ extended: false }), express.json()])

app.get('/', (req, res) => {
  res.status(200).json({ success: true })
})

app.all('*', (req, res) => {
  res.status(404).json({ success: false, message: '404 Not Found' })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
