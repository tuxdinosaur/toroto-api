
const mongoose = require('mongoose')

const DB_USER = 'nuvoivan'
const DB_PASSWORD = '7TbtOmkabUQqMH8B'
const DB_HOST = 'toroto-m0sbe.azure.mongodb.net'
const DB_NAME = 'toroto_db'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
