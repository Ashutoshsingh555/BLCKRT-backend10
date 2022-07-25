'use strict';
module.exports = (sequelize, DataTypes) => {
  const adminContactUs = sequelize.define('adminContactUs', {
    Query: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  adminContactUs.associate = function(models) {
    // associations can be defined here
  };
  return adminContactUs;
};