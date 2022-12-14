const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
	lastname: {
		type: String,
		required: [true, 'Please add a lastname'],
	  },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    versionKey: false,
  }
)

module.exports = mongoose.model('User', userSchema)