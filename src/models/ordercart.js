'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderCart = sequelize.define('orderCart', {
    productId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    GiftOffersName:DataTypes.STRING,
    TaxType: DataTypes.STRING,
    GSTrate: DataTypes.FLOAT,
    taxAmount: DataTypes.FLOAT,
    orderId: DataTypes.INTEGER,
    varientId: DataTypes.INTEGER,
    mrp: DataTypes.FLOAT,
    waightunitno: DataTypes.STRING,
    unit: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    total: DataTypes.FLOAT,
    qty: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {});
  orderCart.associate = function (models) {
    // associations can be defined here
    models.orderCart.belongsTo(models.Address, { foreignKey: 'addressId' });
    models.orderCart.belongsTo(models.Order, { foreignKey: 'orderId' });
    models.orderCart.belongsTo(models.varientModel, { foreignKey: 'varientId' });
  };
  return orderCart; 
};