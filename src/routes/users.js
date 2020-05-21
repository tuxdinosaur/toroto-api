
const express = require('express')

const user = require('../use_cases/user')

const router = express.Router()

// GET /users -> getAll()
router.get('/', async (request, response) => {
  try {
    const users = await user.getAll()
    response.json({
      success: true,
      message: 'All users',
      data: {
        users
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

module.exports = router
