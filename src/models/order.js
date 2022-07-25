
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    custId: DataTypes.INTEGER,
    couponId:DataTypes.INTEGER,
    paid:DataTypes.STRING,
    number: DataTypes.STRING,
    paymentmethod: DataTypes.STRING,
    timeSlot:DataTypes.STRING,
    deliverydate: DataTypes.DATE,
    shipingCharge:DataTypes.FLOAT,
    couponAmount:DataTypes.FLOAT,
    totalDiscount: DataTypes.FLOAT,
    grandtotal: DataTypes.FLOAT,
    paymentStatus:DataTypes.STRING,
    WalletRefund:DataTypes.FLOAT,
    status: DataTypes.ENUM('processing','shipping','delieverd','cancel','ReturnRequest','AcceptedRequest','AssignToDeliveryBoy','PaymentProcessing','returned'),
    runners:DataTypes.STRING,
    runnersStatus:DataTypes.ENUM("pending",'accepted','reject'),
    settingId:DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    models.Order.hasMany(models.Address, { foreignKey: 'orderId' });
    models.Order.hasMany(models.orderCart, { foreignKey: 'orderId' });
    models.Order.belongsTo(models.customerModel, { foreignKey: 'custId' }); 
    models.Order.belongsTo(models.couponModel, { foreignKey: 'couponId' }); 
    // models.Order.hasMany(models.payment, { foreignKey: 'orderCreationId' });  
    models.Order.belongsTo(models.featureSettings,{foreignKey:'settingId'})


  };
  return Order;
};


