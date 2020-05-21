
const mongoose = require('mongoose')

const DB_PASSWORD = '7TbtOmkabUQqMH8B'
const DB_NAME = 'toroto_db'

const url = `mongodb+srv://nuvoivan:${DB_PASSWORD}@toroto-m0sbe.azure.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
