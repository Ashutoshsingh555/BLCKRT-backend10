'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GiftOffers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
   
      phone: {
        type: Sequelize.STRING
      },
       offerType: {
        type:Sequelize.ENUM("Free","Paid"),
        defaultValue:"Free"
       },
      offerName:{
        type:Sequelize.STRING
      },
      categoryId: {
        type:Sequelize.INTEGER
      },
      sortdsc:{
        type:Sequelize.STRING
      },
      dsc: {
        type:Sequelize.STRING
      },
      brand:{
        type:Sequelize.STRING
      },
      qty: {
        type:Sequelize.FLOAT
      },
      mrp: {
        type:Sequelize.FLOAT
      },
      discount: {
        type:Sequelize.FLOAT
      },
      totalPrice: {
        type:Sequelize.FLOAT
      },
      status: {
        type:Sequelize.BOOLEAN
      },
      photo:{
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
    return queryInterface.dropTable('GiftOffers');
  }
};