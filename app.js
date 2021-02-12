const config = require('./utils/config')
const express = require('express')
require('express-async-errors')

const morgan = require('morgan')

const app = express()
const cors = require('cors')

const commentsRouter = require('./controllers/comments')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware')

const mongoose = require('mongoose')
const logger = require('./utils/logger')


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))




app.use('/api/comments', commentsRouter)

app.use('/api/users', usersRouter)


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/info', (req, res) => {
  res.send('Here be info.')
})

app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


// this is supposed to redirect calls to sub-pages back to front page
// and prevent the 'cannot GET' error
// but it doesn't work yet
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = app
