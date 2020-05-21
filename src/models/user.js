
const mongoose = require('mongoose')

// Constructor de schema
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 64,
    trim: true,
    toLowerCase: true
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 64,
    trim: true,
    toLowerCase: true
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    toLowerCase: true
  },
  role: {
    type: String,
    default: 'Regular',
    enum: [
      'Regular',
      'Admin'
    ],
    required: true
  },
  suscription: {
    plan: {
      type: String,
      default: 'Basic',
      enum: [
        'Basic',
        'Pro'
      ],
      required: true
    },
    cost: {
      type: String,
      default: '2 USD',
      enum: [
        '2 USD',
        '5 USD'
      ],
      required: true
    }
  }
})

module.exports = mongoose.model('Users', usersSchema)
