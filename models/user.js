'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    user: jsonb
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};