'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecentSearches = sequelize.define('RecentSearches', {
    search: DataTypes.STRING,
    custId:DataTypes.INTEGER
  }, {});
  RecentSearches.associate = function(models) {
    // associations can be defined here
    models.RecentSearches.belongsTo(models.customerModel,{foreignKey: 'custId' })
  };
  return RecentSearches;
};