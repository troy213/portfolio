const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
PORT = process.env.PORT || 5000

const expRouter = require('./router/exp_router')
const skillsRouter = require('./router/skills_router')
const msgRouter = require('./router/msg_router')

app.use([cors(), express.urlencoded({ extended: false }), express.json()])
app.use('/experiences', expRouter)
app.use('/skills', skillsRouter)
app.use('/message', msgRouter)

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello from the server' })
})

app.all('*', (req, res) => {
  res.status(404).json({ success: false, message: '404 Not Found' })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
