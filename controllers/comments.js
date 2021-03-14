const commentsRouter = require('express').Router()
const Comment = require('../models/comment')
const User = require('../models/user')

const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}


commentsRouter.get('/', async (request, response) => {
  const comments = await Comment
    .find({}).populate('user')
  response.json(comments.map(comm => comm.toJSON()))
})

commentsRouter.post('/', async (request, response) => {
  const body = request.body
  console.log('request', request)
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const comment = new Comment({
    content: body.content,
    date: new Date(),
    user: user
  })

  const savedComment = await comment.save()
  
  user.comments = user.comments.concat(savedComment._id)
  await user.save()

  response.json(savedComment.toJSON())
})

commentsRouter.delete('/:id', async (request, response) => {
  await Comment.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

commentsRouter.get('/:id', async (request, response) => {
  const comment = await Comment.findById(request.params.id)
  if (comment) {
    response.json(comment.toJSON())
  } else {
    response.status(404).end()
  }
})

/* // below is copy-paste from elsewhere, not usable as such!!

notesRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote.toJSON())
    })
    .catch(error => next(error))
})

*/

module.exports = commentsRouter
