'use strict';
module.exports = (sequelize, DataTypes) => {
  const bannerSettings = sequelize.define('bannerSettings', {
    BannerType: DataTypes.ENUM('topBanner','webFoterBanner','middle1','middle2','aboutUsBanner','CategoryBanner','OffersBanner' ),

   
  }, {});
  bannerSettings.associate = function(models) {
    // associations can be defined here
     models.bannerSettings.hasMany(models.bannerPhotosSettings,{foreignKey:"bannerId"})
  
  };
  return bannerSettings;
};
