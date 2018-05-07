const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password');
    }
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  language: {
    type: Sequelize.ENUM('Bengali', 'English', 'French', 'Greek', 'Hindi', 'Latin', 'Mandarin', 'Russian', 'Spanish' )
  },
  level: {
    type: Sequelize.ENUM('Beginner', 'Intermediate', 'Advanced')
  }
});

module.exports = User;
