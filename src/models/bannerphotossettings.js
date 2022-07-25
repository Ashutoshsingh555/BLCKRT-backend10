'use strict';
module.exports = (sequelize, DataTypes) => {
  const bannerPhotosSettings = sequelize.define('bannerPhotosSettings', {
    photoUrl: DataTypes.STRING,
    bannerId: DataTypes.INTEGER,
    imageCaption: DataTypes.STRING,
    status:DataTypes.BOOLEAN,
    categoryId:DataTypes.INTEGER
  }, {});
  bannerPhotosSettings.associate = function(models) {
    // associations can be defined here
    models.bannerPhotosSettings.belongsTo(models.bannerSettings,{foreignKey:"bannerId"})
    models.bannerPhotosSettings.belongsTo(models.category,{foreignKey:"categoryId"})
  };
  return bannerPhotosSettings;
};
