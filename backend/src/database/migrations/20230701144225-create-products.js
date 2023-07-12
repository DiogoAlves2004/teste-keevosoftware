'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('products', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      description: {
        type: Sequelize.TEXT
      },
      
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      metricunit: {
        type: Sequelize.STRING,
      },


      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('products');
  }
};
