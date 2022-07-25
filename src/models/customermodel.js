
'use strict';
module.exports = (sequelize, DataTypes) => {
  const customerModel = sequelize.define('customerModel', {
    Name: DataTypes.STRING,
    loyalityConfId:DataTypes.INTEGER,
    referId:DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    userRefralcode:DataTypes.INTEGER,
    totalOrder: DataTypes.INTEGER,
    loyalityPoints: DataTypes.INTEGER,
    status: DataTypes.STRING,
    plateForm: DataTypes.STRING,
    enrollNo:DataTypes.STRING,
    walletAmounts: DataTypes.FLOAT,
   activated:{
       type:DataTypes.BOOLEAN,
       default :false
    },
  }, {});
  customerModel.associate = function(models) {
    // associations can be defined here
     models.customerModel.hasMany(models.refreshSchema, { foreignKey: 'custId' });  
     models.customerModel.hasMany(models.Address, { foreignKey: 'custId' });  
     models.customerModel.hasMany(models.payment, { foreignKey: 'custId' });  
     models.customerModel.hasMany(models.olderAppAdress, { foreignKey: 'custId' }); 
     models.customerModel.hasMany(models.Order, { foreignKey: 'custId' }); 
     models.customerModel.hasMany(models.customerCart, { foreignKey: 'custId' }); 
     models.customerModel.hasMany(models.customerFavList, { foreignKey: 'custId' }); 
     models.customerModel.hasMany(models.RecentSearches, { foreignKey: 'custId' }); 
     models.customerModel.belongsTo(models.LoyaltyPointModel ,{foreignKey:'loyalityConfId'})
     models.customerModel.belongsTo(models.referEarnModel ,{foreignKey:'referId'})
    models.customerModel.hasMany(models.mapcustomeradress, { foreignKey: 'custId' });

  };

  return customerModel;
};
