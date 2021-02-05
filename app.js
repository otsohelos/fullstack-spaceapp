const express = require('express')
const morgan = require('morgan')

const app = express()
const cors = require('cors')
app.use(express.static('build'))
app.use(express.json())

const commentsRouter = require('./controllers/comments')
const usersRouter = require('./controllers/users')

app.use(cors())
//const apodRouter = require('./controllers/apod')
const http = require('http')

app.use(morgan('tiny'))
app.use('/api/comments', commentsRouter)
app.use('/api/users', usersRouter)


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/info', (req, res) => {
  res.send('Here be info.')
})

const generateId = () => {
  return (Math.random() * 5000)
}
/* 
app.post('/api/comments', (request, response) => {
  const body = request.body
  if (!body.content || !body.author) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  else {
    console.log(body)
    const comment = {
      id: generateId(),
      author: body.author,
      content: body.content,
      date: new Date()
    }
    comments = comments.concat(comment)
    response.json(comment)
  }

})
 */

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
