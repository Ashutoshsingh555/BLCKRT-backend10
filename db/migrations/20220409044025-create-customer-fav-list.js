'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customerFavLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      custId:{
        type:Sequelize.INTEGER
        },
        productId:{
        type:Sequelize.INTEGER
      },
        varientId:{
        type:Sequelize.INTEGER
      },
        productName:{
          type:Sequelize.STRING
        },
        productPrice:{
        type:Sequelize.FLOAT
      },
        productMrp:{
        type:Sequelize.FLOAT
      },
        qty:{
        type:Sequelize.INTEGER
      },
        productDiscount:{
        type:Sequelize.FLOAT
      },
        grandTotal:{
        type:Sequelize.FLOAT
      },
        productDescription:{
          type:Sequelize.STRING
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customerFavLists');
  }
};