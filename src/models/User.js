const mongoose = require('mongoose');
const { use } = require('react');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
UserSchema.pre("save" async function (next) {
this.password = await bcrypt.hash (this.password, 12)
next();
}),
UserSchema.pre("save" async function (next) {
this.confirmPassword = await bcrypt.hash (this.confirmPassword, 12)
next();
}),
});
module.exports = mongoose.model('User', UserSchema);