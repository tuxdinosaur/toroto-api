
const express = require('express')
const cors = require('cors')

const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

// Creando la linea de produccion (servidor)
const app = express()

// MIDDLEWARE
app.use(cors()) // Se necesita para poder llamar la API desde un Front
app.use(express.json())

// Middleware
// Parsea cada request a json, solo en caso de que contenga
// el header 'content-type' con valor 'application/json'
// toma el body y lo transforma en un json que nos lo entrega
// en el objeteo request.body
// app.use(express.json())

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'Ok'
  })
})

// Se monta el router
app.use('/users', usersRouter)
app.use('/auth', authRouter)

module.exports = app
