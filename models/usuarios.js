'use strict';
module.exports = (sequelize, DataTypes) => {
  var usuarios = sequelize.define('usuarios', {
    usuario: DataTypes.JSONB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usuarios;
};