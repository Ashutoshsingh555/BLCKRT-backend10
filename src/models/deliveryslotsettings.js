'use strict';
module.exports = (sequelize, DataTypes) => {
  const deliverySlotSettings = sequelize.define('deliverySlotSettings', {
    OrderBuffertime: DataTypes.STRING,
    InstanceDelivery:DataTypes.BOOLEAN,
    OrderTimeTaken: DataTypes.STRING,
    MaxOrder: DataTypes.INTEGER,
    appDisplayMsg: DataTypes.TEXT,
    OrderTimeSetingStatus:DataTypes.BOOLEAN
  }, {});
  deliverySlotSettings.associate = function(models) {
    // associations can be defined here
     models.deliverySlotSettings.hasMany(models.timeSlots, { foreignKey: 'deliverySlotId' });
    //  models.deliverySlotSettings.hasMany(models.Order, { foreignKey: 'deliverySlotId' });
    //  models.deliverySlotSettings.hasMany(models.timeSlots, { foreignKey: 'deliverySlotId' });
  };
  return deliverySlotSettings;
};