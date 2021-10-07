module.exports = (sequelize, DataTypes) => {
  const Caixa = sequelize.define(
    "Caixa",
    {
      saldo: DataTypes.DECIMAL,
      status: DataTypes.STRING
    }
  );
  return Caixa;
};