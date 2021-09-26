'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movimento-caixa', {
      ajusteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        references: {
          model:{
            tableName: 'ajuste'
          },
          key:'id',
          as:'ajusteId'
        },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
      },
      caixaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        references: {
          model:{
            tableName: 'caixa'
          },
          key:'id',
          as:'caixaId'
        },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movimento-caixa');
  }
};