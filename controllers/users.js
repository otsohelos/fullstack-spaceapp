const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
  const body = request.body

  console.log('body:', body)
  if (body.username === null) {
    return response.status(400).json({ error: 'Choose a username.' })
  }
  else if (body.password === null) {
    return response.status(400).json({ error: 'Choose a password' })
  }
  else if (body.name === null) {
    return response.status(400).json({ error: 'Choose a name' })
  }
  else if (body.username.length < 3) {
    return response.status(400).json({ error: 'Username needs to be at least 3 characters long' })
  }
  else if (body.password.length < 6) {
    return response.status(400).json({ error: 'Password needs to be at least 6 characters long' })
  } else {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })


    const savedUser = await user.save()

    response.json(savedUser)
  }
})

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})
  response.json(users.map(user => user.toJSON()))
})

usersRouter.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id)
  if (user) {
    response.json(user.toJSON())
  } else {
    response.status(404).end()
  }
})


module.exports = usersRouter
