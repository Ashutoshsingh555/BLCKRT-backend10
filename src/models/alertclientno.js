'use strict';
module.exports = (sequelize, DataTypes) => {
  const alertClientNo = sequelize.define('alertClientNo', {
    clientNo: DataTypes.STRING,
    alertId:DataTypes.INTEGER
 
  }, {});
  alertClientNo.associate = function(models) {
    // associations can be defined here
    models.alertClientNo.belongsTo(models.alertMsgModel,{foreignKey:'alertId'})
  };
  return alertClientNo;
};

