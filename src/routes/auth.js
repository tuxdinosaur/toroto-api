
const express = require('express')

const user = require('../use_cases/user')

const router = express.Router()

router.post('/login', async (request, response) => {
  console.log('login')

  try {
    const { email, password } = request.body
    console.log('cred: ', email, password, request.body)

    // JWT
    const token = await user.login(email, password)
    console.log('token: ', token)
    response.json({
      success: true,
      message: 'Logged in',
      data: {
        token
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
