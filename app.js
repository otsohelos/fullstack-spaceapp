const config = require('./utils/config')
const express = require('express')
require('express-async-errors')

const morgan = require('morgan')

const app = express()
const cors = require('cors')

const commentsRouter = require('./controllers/comments')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')

const mongoose = require('mongoose')
const logger = require('./utils/logger')
const path = require('path');


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

app.use('/api/login', loginRouter)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/info', (req, res) => {
  res.send('Here be info.')
})
// this redirects calls to sub-pages to the right page from the backend
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)




module.exports = app
