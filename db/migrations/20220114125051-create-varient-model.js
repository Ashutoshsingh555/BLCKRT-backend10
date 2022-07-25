'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('varientModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sort: {
        type: Sequelize.INTEGER
      },
      productId:{
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      waightunitno: {
        type: Sequelize.STRING
      },
      unit:{
        type:Sequelize.STRING
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
      stock: {
        type: Sequelize.INTEGER
      },
      minstock: {
        type: Sequelize.INTEGER
      },
      outofstock: {
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
    return queryInterface.dropTable('varientModels');
  }
};