'use strict';
module.exports = (sequelize, DataTypes) => {
  const customerCart = sequelize.define('customerCart', {
    custId:DataTypes.INTEGER,
    productId:DataTypes.INTEGER,
    varientId:DataTypes.INTEGER,
   	productName:DataTypes.STRING,
  	productPrice:DataTypes.FLOAT,
  	productMrp:DataTypes.FLOAT,
  	qty:DataTypes.INTEGER,
	  productDiscount:DataTypes.FLOAT,
    grandTotal:DataTypes.FLOAT,
    productDescription:DataTypes.STRING,

  }, {});
  customerCart.associate = function(models) {
    // associations can be defined here
     models.customerCart.belongsTo(models.product,{ foreignKey: 'productId' }); 
     models.customerCart.belongsTo(models.customerModel,{ foreignKey: 'custId' }); 
  };
  return customerCart;
};