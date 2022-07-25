
'use strict';
module.exports = (sequelize, DataTypes) => {
  const area = sequelize.define('area', {
    name: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    zipcode: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    hex: DataTypes.STRING,
    mapUrl: DataTypes.STRING
  }, {});
  area.associate = function(models) {
    // associations can be defined here
    models.area.belongsTo(models.location, { foreignKey: 'locationId' });
    models.area.hasMany(models.vendor, { foreignKey: 'areaId' });

  };
  return area;
};


