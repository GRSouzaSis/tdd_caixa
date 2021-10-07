const {Caixa} = require ("../models");
class CaixaController {
    async createCaixa(req, res) {
      const {saldo, status} = req.body;
      const caixa = await Caixa.findOne({where:{status:'aberto'}});
      if(!caixa){
        return res.status(401).json({ message: "" });
      }
      return res.json({
        caixa
      });
  }
}
module.exports = new CaixaController()