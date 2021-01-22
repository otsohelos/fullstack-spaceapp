const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(express.static('build'))

app.use(cors())
//const apodRouter = require('./controllers/apod')
const http = require('http')

app.use(morgan('tiny'))

let comments = [
  {
    id: 1,
    content: "nice work",
    date: "2020-01-10T17:30:31.098Z",
    author: 'alice'
  },
  {
    id: 2,
    content: "witty comment",
    date: "2020-01-10T18:39:34.091Z",
    author: 'bob'
  },
  {
    id: 3,
    content: "I love space!",
    author: 'carol',
    date: "2020-01-10T19:20:14.298Z"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/info', (req, res) => {
  res.send('Here be info.')
})

app.get(('/api/comments'), (req, res) => {
  res.send(comments)
})

app.get('/api/comments/:id', (request, response) => {
  const id = Number(request.params.id)
  const comment = comments.find(comm => comm.id === id)
  if (comment) {
    response.json(comment)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  return (Math.random() * 5000)
}

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

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const server = http.createServer(app)

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} on ${new Date}`)
})
