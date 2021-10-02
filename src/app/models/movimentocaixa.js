'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovimentoCaixa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsToMany(models.Caixa, { foreignKey:'id', as:'caixa'});
      // this.hasOne(models.Ajuste, { foreignKey:'id', as:'ajuste'});
    }
  };
  MovimentoCaixa.init({
    ajusteId: DataTypes.INTEGER,
    caixaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovimentoCaixa',
    freezeTableName: true
  });
  return MovimentoCaixa;
};