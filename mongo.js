const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
`mongodb+srv://otsohelos:${password}@otsonekaklusteri.2k1he.mongodb.net/spaceapp?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const commentSchema = new mongoose.Schema({
  content: String,
  date: Date,
  user: String,
})

const Comment = mongoose.model('Comment', commentSchema)

/*const comment = new Comment({
  content: 'Don\'t believe everything you read on the internet',
  date: new Date(),
  user: 'Albert Einstein'
})*/

const comments = []

Comment.find({}).then(result => {
  result.forEach(comment => {
    console.log(comment)
    comments.push(comment)
  })
  mongoose.connection.close()
})


