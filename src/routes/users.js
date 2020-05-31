
const express = require('express')
const user = require('../use_cases/user')
const auth = require('../middleware/auth')

const router = express.Router()

// middleware a nivel del router
router.use((request, response, next) => {
  console.log('middleware router users')
  next()
})

// GET /users -> getAll()
router.get('/', auth, async (request, response) => {
// router.get('/', async (request, response) => {
  try {
    const allUsers = await user.getAll()
    response.json({
      success: true,
      message: 'All users',
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// POST /users -> create()
router.post('/', async (request, response) => {
  try {
    const newUser = await user.create(request.body)
    response.json({
      success: true,
      message: 'User created',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// GET BY ID /users/:id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const userFound = await user.getById(id)

    response.json({
      success: true,
      message: 'User found',
      data: {
        user: userFound
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// DELETE BY ID /users/:id

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const userDelete = await user.deleteById(id)

    response.json({
      success: true,
      message: 'User deleted',
      data: {
        user: userDelete
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// PATCH /users/id

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const userToUpdate = await user.updateById(id, request.body)

    response.json({
      success: true,
      message: 'User updated',
      data: {
        user: userToUpdate
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// POST SIGNUP -> REGISTRO DE USUARIO
// POST SIGNIN -> LOGIN DE USUARIO

router.post('/signup', async (request, response) => {
  try {
    const newUser = await user.signup(request.body)
    response.json({
      success: true,
      message: 'User registered',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
