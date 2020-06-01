
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')
const User = require('../models/user')

// Los casos de uso son las acciones que puede ejecutar un usuario en el sistema

function getAll () {
  return User.find({})
}

function create ({ name, lastName, email, password, role }) {
  const newUser = new User({ name, lastName, email, password, role })
  return newUser.save()
}

function deleteById (id) {
  return User.findByIdAndDelete(id)
}

function getById (id) {
  return User.findById(id)
}

function updateById (id, newUserData) {
  return User.findByIdAndUpdate(id, newUserData)
}

// 1. VALIDAR CORREO EXISTENTE
// 2. HASH ENCRIPTADO DEL PASSWORD
// 3. SE CREA USUARIO

async function signup (newUserData) {
  const { email, password } = newUserData

  // VALIDACIONES
  if (!email) throw new Error('Email is requeried')
  if (!password) throw new Error('Password is requeried')

  console.log(newUserData)

  const userAlreadyExists = await User.findOne({ email })

  console.log('userAlreadyExists: ', userAlreadyExists)

  if (userAlreadyExists) throw new Error('This email is already taken')
  if (password.length < 8) throw new Error('Password must be 8 characters minimum')

  const hash = await bcrypt.hash(password, 10)
  console.log('hash: ', hash)

  const {
    name,
    lastName,
    role,
    suscription
  } = newUserData

  // return User.create({ name, lastName, role, password: hash })
  const dataUser = { name, lastName, email, role, suscription, password: hash }
  console.log('dataUser: ', dataUser)
  return User.create(dataUser)
}

async function login (email, password) {
  console.log('usecase')
  console.log(email, password)

  const userFound = await User.findOne({ email })
  console.log(userFound)
  if (!userFound) throw new Error('Unauthorized')

  // console.log('Will compare: ', password, userFound.password)

  const isPasswordCorrect = await bcrypt.compare(password, userFound.password)
  // console.log('isPasswordCorrect: ', isPasswordCorrect)
  if (!isPasswordCorrect) throw new Error('Unauthorized')

  // PAYLOAD PREVIEW

  const payload = {
    id: userFound._id,
    role: userFound.role
  }

  // PAYLOAD PREVIEW

  // return jwt.sign({ id: userFound._id })
  return jwt.sign(payload)
}

module.exports = {
  getAll,
  create,
  deleteById,
  getById,
  updateById,
  signup,
  login
}
