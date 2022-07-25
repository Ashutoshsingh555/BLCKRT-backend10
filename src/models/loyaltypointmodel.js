
'use strict';
module.exports = (sequelize, DataTypes) => {
  const LoyaltyPointModel = sequelize.define('LoyaltyPointModel', {
    Points: DataTypes.INTEGER,
    Amounts: DataTypes.INTEGER,
  
  }, {});
  LoyaltyPointModel.associate = function(models) {
    // associations can be defined here
     models.LoyaltyPointModel.hasMany(models.customerModel ,{foreignKey:'loyalityConfId'})
  };
  return LoyaltyPointModel;
};