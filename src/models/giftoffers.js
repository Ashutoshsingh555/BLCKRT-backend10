'use strict';
module.exports = (sequelize, DataTypes) => {
  const GiftOffers = sequelize.define('GiftOffers', {
      offerType: DataTypes.ENUM("Free","Paid"),
      offerName: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      sortdsc: DataTypes.STRING,
      dsc: DataTypes.TEXT,
      brand: DataTypes.STRING,
      qty: DataTypes.FLOAT,
      mrp: DataTypes.FLOAT,
      discount: DataTypes.FLOAT,
      totalPrice: DataTypes.FLOAT,
      status: DataTypes.BOOLEAN,
      photo: DataTypes.STRING,
   
  }, {});
  GiftOffers.associate = function(models) {
    // associations can be defined here
    models.GiftOffers.belongsTo(models.category,{foreignKey:"categoryId"})
  };
  return GiftOffers;
};