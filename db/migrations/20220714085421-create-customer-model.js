
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customerModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name:{
        type:Sequelize.STRING
      },
       referId:{
         type:Sequelize.INTEGER,
         defaultValue: 1
       },
      userRefralcode:{
        type:Sequelize.INTEGER
      },
      loyalityConfId:{
        type:Sequelize.INTEGER,
        defaultValue: 1
      },
      avatar:{
        type:Sequelize.STRING
      },
      phone:{
        type:Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING
      },
      totalOrder:{
        type:Sequelize.INTEGER
      },
      loyalityPoints: {
        type:Sequelize.INTEGER
      },
       walletAmounts: {
         type:Sequelize.FLOAT
       },
      status:{
        type:Sequelize.STRING
      },
      plateForm:{
      type:Sequelize.STRING
      },
      enrollNo:{
        type:Sequelize.STRING
      },
      activated:{
        type:Sequelize.BOOLEAN,
        default :false
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
    return queryInterface.dropTable('customerModels');
  }
};


