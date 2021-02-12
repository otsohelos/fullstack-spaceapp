const Comment = require('../models/comment')
const User = require('../models/user')

const initialComments = [
  {
    content: 'Hey ho here we go',
  },
  {
    content: 'One, two, one two three four',
  }
]



/* const initialComments = [
  {
    content: 'Space is kinda big',
  },
  {
    content: 'Don\'t believe everything you read on the internet',
  },
  {
    content: 'Good work!'
  }
] */

const nonExistingId = async () => {
  const comment = new Comment({ content: 'willremovethissoon' })
  await comment.save()
  await comment.remove()

  return comment._id.toString()
}

const commentsInDb = async () => {
  const comments = await Comment.find({})
  return comments.map(comm => comm.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialComments, nonExistingId, commentsInDb, usersInDb
}
