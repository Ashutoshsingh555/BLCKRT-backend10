'use strict';
module.exports = (sequelize, DataTypes) => {
  const inventoryStockSetting = sequelize.define('inventoryStockSetting', {
    SettingStatus: DataTypes.BOOLEAN,
    featuresId: DataTypes.INTEGER
  }, {});
  inventoryStockSetting.associate = function(models) {
    // associations can be defined here
  };
  return inventoryStockSetting;
};