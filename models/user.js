const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')

const sequelize = new Sequelize('postgres')

const User = sequelize.define('users', {
  userName:{
    type: sequalize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: sequalize.STRING,
    allowNull: false
  }
})