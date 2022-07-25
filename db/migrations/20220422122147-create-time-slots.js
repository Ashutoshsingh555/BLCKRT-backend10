'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('timeSlots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timeSlotfrom: {
        type:Sequelize.STRING
      },
      timeSlotTo: {
        type:Sequelize.STRING
        },
      deliverySlotId:{
        type:Sequelize.INTEGER
      },
      Mon:{
       type:Sequelize.STRING
      },
      Tue:{
       type:Sequelize.STRING
      },
      Wed:{
       type:Sequelize.STRING
      },
      Thu:{
       type:Sequelize.STRING
     },
      Fri:{
       type:Sequelize.STRING
      },
      Sat:{
       type:Sequelize.STRING
      },
      Sun:{
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
    return queryInterface.dropTable('timeSlots');
  }
};