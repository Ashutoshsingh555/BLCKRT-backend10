'use strict';
module.exports = (sequelize, DataTypes) => {
  const timeSlots = sequelize.define('timeSlots', {
    timeSlotfrom: DataTypes.STRING,
    timeSlotTo: DataTypes.STRING,
    deliverySlotId:DataTypes.INTEGER,
     Mon:DataTypes.STRING,
     Tue:DataTypes.STRING,
     Wed:DataTypes.STRING,
     Thu:DataTypes.STRING,
     Fri:DataTypes.STRING,
     Sat:DataTypes.STRING,
     Sun:DataTypes.STRING,
  }, {});
  timeSlots.associate = function(models) {
    // associations can be defined here
    models.timeSlots.belongsTo(models.deliverySlotSettings, { foreignKey: 'deliverySlotId' });
    
  };
  return timeSlots;
  
};