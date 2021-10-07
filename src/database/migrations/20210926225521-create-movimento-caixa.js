'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MovimentoCaixa', {
      ajusteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        unique: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MovimentoCaixa');
  }
};