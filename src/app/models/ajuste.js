module.exports = (sequelize, DataTypes) => {
  const Ajuste = sequelize.define(
    "Ajuste",
    {
      valor: DataTypes.DECIMAL,
      data:DataTypes.DATE,
      motivo: DataTypes.STRING,
      tipo: DataTypes.STRING
    }
  );
  return Ajuste;
};