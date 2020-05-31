
const jwt = require('jsonwebtoken')

// const { JWT_SECRET } = process.env
const secret = 'dark_cat'

function sign (payload = {}) {
  return jwt.sign(payload, secret, { expiresIn: '2d' })
}

function verify (token) {
  return jwt.verify(token, secret)
}

module.exports = {
  ...jwt,
  sign,
  verify
}
