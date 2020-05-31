
const bcrypt = require('bcrypt')

const { SALT_ROUNDS } = process.env

function hash (plainText) {
  return bcrypt.hash(plainText, parseInt(SALT_ROUNDS))
}

module.exports = {
  ...bcrypt,
  hash
}
