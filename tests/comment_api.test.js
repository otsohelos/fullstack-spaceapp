const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')

const Comment = require('../models/comment')
const User = require('../models/user')

const getTokenHeader = async () => {
  const result = await api.post("/api/login").send(helper.testUser);
  return `bearer ${result.body.token}`;
};

describe('when there is initially some comments saved', () => {
  beforeEach(async () => {
    await Comment.deleteMany({})

    const commentObjects = helper.initialComments
      .map(comm => new Comment(comm))
    const promiseArray = commentObjects.map(comm => comm.save())
    await Promise.all(promiseArray)
  })

  test('comments are returned as json', async () => {
    await api
      .get('/api/comments')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all comments are returned', async () => {
    const response = await api.get('/api/comments')

    expect(response.body.length).toBe(helper.initialComments.length)
  })

  test('a specific comment is within the returned comments', async () => {
    const response = await api.get('/api/comments')

    const contents = response.body.map(r => r.content)
    expect(contents).toContain(
      'Hey ho here we go'
    )
  })
})

describe('deletion of a comment', () => {
  test('succeeds with status code 204 if id is valid', async () => {
    const commentsAtStart = await helper.commentsInDb()
    //console.log('commentsAtStart:', commentsAtStart)
    const commentToDelete = commentsAtStart[0]
    //console.log('commentToDelete', commentToDelete)

    await api
      .delete(`/api/comments/${commentToDelete.id}`)
      .expect(204)

    const commentsAtEnd = await helper.commentsInDb()

    expect(commentsAtEnd.length).toBe(
      helper.initialComments.length - 1
    )

    const contents = commentsAtEnd.map(c => c.content)

    expect(contents).not.toContain(commentToDelete.content)
  })
})

describe('viewing a specific comment', () => {

  test('succeeds with a valid id', async () => {
    const commentsAtStart = await helper.commentsInDb()

    const commentToView = commentsAtStart[0]

    const resultComment = await api
      .get(`/api/comments/${commentToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(resultComment.body).toEqual(commentToView)
  })

  test('fails with statuscode 404 if comment does not exist', async () => {
    const validNonexistingId = await helper.nonExistingId()

    console.log(validNonexistingId)

    await api
      .get(`/api/comments/${validNonexistingId}`)
      .expect(404)
  })

  test('fails with statuscode 400 id is invalid', async () => {
    const invalidId = '5a3d5da59070081a82a3445'

    await api
      .get(`/api/comments/${invalidId}`)
      .expect(400)
  })
})

describe('addition of a new comment', () => {
  beforeEach(async () => {
    await Comment.deleteMany({})

    const commentObjects = helper.initialComments
      .map(comm => new Comment(comm))
    const promiseArray = commentObjects.map(comm => comm.save())
    await Promise.all(promiseArray)
  })
  test('succeeds with valid data', async () => {
    const tokenHeader = await getTokenHeader();

    const newComment = {
      content: 'space is mostly empty.'
    }

    await api
      .post('/api/comments')
      .send(newComment)
      .set("Authorization", tokenHeader)
      .expect(200)
      .expect('Content-Type', /application\/json/)


    const commentsAtEnd = await helper.commentsInDb()
    expect(commentsAtEnd.length).toBe(helper.initialComments.length + 1)

    const contents = commentsAtEnd.map(c => c.content)
    expect(contents).toContain(
      'space is mostly empty.'
    )
  })

  test('fails with status code 400 if data invalid', async () => {
    const newComment = {
      important: true
    }
    const tokenHeader = await getTokenHeader();

    await api
      .post('/api/comments')
      .send(newComment)
      .set("Authorization", tokenHeader)
      .expect(400)

    const commentsAtEnd = await helper.commentsInDb()

    expect(commentsAtEnd.length).toBe(helper.initialComments.length)
  })
})


describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('supersecret', 10)
    const user = new User({ username: 'root', name: 'Superuser', passwordHash })
    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'ohelos',
      name: 'Otso Helos',
      password: 'extremelysecret',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`username` to be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })
  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'ohelos',
      name: 'Otso Helos',
      password: 'extremelysecret',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
  test('creation fails with with proper statuscode and message if too short password', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'einstein',
      name: 'Albert Einstein',
      password: 'asd',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('Password needs to be at least 6 characters long')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  }) 
   test('creation fails with proper statuscode and message if no name', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'curie',
      password: 'passW0rd',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`name` is required')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })
})


afterAll(() => {
  mongoose.connection.close()
})
