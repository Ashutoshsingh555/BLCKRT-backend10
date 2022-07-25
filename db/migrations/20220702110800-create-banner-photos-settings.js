
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bannerPhotosSettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photoUrl:{
        type:Sequelize.STRING
      },
      bannerId:{
        type:Sequelize.INTEGER
      },
       imageCaption: {
        type:Sequelize.STRING
      },
      categoryId:{
        type:Sequelize.INTEGER
      },
     
      status:{
        type:Sequelize.BOOLEAN
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
    return queryInterface.dropTable('bannerPhotosSettings');
  }
};