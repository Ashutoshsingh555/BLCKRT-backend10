'use strict';
module.exports = (sequelize, DataTypes) => {
  const alertMsgModel = sequelize.define('alertMsgModel', {
    title: DataTypes.STRING,
    alerttext: DataTypes.STRING,
    pushstatus: DataTypes.BOOLEAN,
    reason: DataTypes.STRING,
    message: DataTypes.TEXT,
  }, {});
  alertMsgModel.associate = function(models) {
    // associations can be defined here
    models.alertMsgModel.hasMany(models.alertClientNo,{foreignKey:'alertId'})
  };
  return alertMsgModel;
};
