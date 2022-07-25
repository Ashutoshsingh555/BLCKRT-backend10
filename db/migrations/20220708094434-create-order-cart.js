
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderCarts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      addressId: {
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING
      },
       GiftOffersName:{
        type:Sequelize.STRING
       },
      TaxType: {
        type: Sequelize.STRING
      },
      GSTrate: {
        type: Sequelize.FLOAT
      },
      taxAmount: {
        type: Sequelize.FLOAT
      },
      orderId: {
        type: Sequelize.INTEGER
      },
      varientId: {
        type: Sequelize.INTEGER
      },
      waightunitno: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      mrp: {
        type: Sequelize.FLOAT
      },
      discount: {
        type: Sequelize.FLOAT
      },

      price: {
        type: Sequelize.FLOAT
      },
      total: {
        type: Sequelize.FLOAT
      },
      qty: {
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('orderCarts');
  }
};


