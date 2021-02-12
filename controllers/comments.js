const commentsRouter = require('express').Router()
const Comment = require('../models/comment')


commentsRouter.get('/', async (request, response) => {
  const comments = await Comment
    .find({})
  response.json(comments.map(comm => comm.toJSON()))
})

commentsRouter.post('/', async (request, response) => {
  const body = request.body

  const comment = new Comment({
    content: body.content,
    important: body.important === undefined ? false : body.important,
    date: new Date(),
  })

  const savedComment = await comment.save()
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
