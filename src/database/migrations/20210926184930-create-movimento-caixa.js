'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('movimento-caixa', 
    {
      ajusteId:{ 
        type:Sequelize.INTEGER,
        references:{model:''}
        allowNull:false
      },
      
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movimento-caixa');
  }
};
