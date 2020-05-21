
const User = require('../models/user')

function create ({ name, lastName, email, role }) {
  const newUser = new User({ name, lastName, email, role })
  return newUser.save()
}

function deleteById (id) {
  return User.findByIdAndDelete(id)
}

function getAll () {
  return User.find({})
}

function getById (id) {
  return User.findById(id)
}

function updateById (id, userInfoToUpdate) {
  return User.findByIdAndUpdate(id, userInfoToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
