module.exports = (sequelize, DataTypes) => {
  const MovimentoCaixa = sequelize.define(
    "MovimentoCaixa",
    {
      ajusteId: DataTypes.INTEGER,
      caixaId: DataTypes.INTEGER
    }
    // {
    //   hooks: {
    //     beforeSave: async user => {
    //       if (user.password) {
    //         user.password_hash = await bcrypt.hash(user.password, 8);
    //       }
    //     }
    //   }
    // }
  );

  // User.prototype.checkPassword = function(password) {
  //   return bcrypt.compare(password, this.password_hash);
  // };

  // User.prototype.generateToken = function() {
  //   return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  // };

  return MovimentoCaixa;
};