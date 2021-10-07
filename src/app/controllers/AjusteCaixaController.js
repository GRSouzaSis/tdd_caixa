const {Caixa, Ajuste} = require ("../models");
class AjusteCaixaController {
    async realizarAjuste(req, res) {
      const {valor, data, motivo, tipo} = req.body;
      const dataAtual = new Date();
      const caixa = await Caixa.findOne({where:{status:'aberto'}});
      if(!caixa)
        return res.status(401).json({ message: "Caixa se encontra fechado" });
      else
      {
        if(valor== undefined || valor < 0 )
          return res.status(401).json({ message: "Caixa se encontra fechado" });
        if(data == undefined || data < dataAtual)
          return res.status(401).json({ message: "Data Invalida" });
        if(motivo == '' || motivo.length <= 0)
          return res.status(401).json({ message: "Motivo Invalido" });
        if(tipo != 'entrada' || tipo != 'sangria')
          return res.status(401).json({ message: "Tipo Invalido" });
        else if(tipo == 'sangria' && valor == 0)
          return res.status(401).json({ message: "Valor para sangria tem que ser maior que zero" });
        else if (tipo == 'sangria' && caixa.saldo == 0)
          return res.status(401).json({ message: "o Caixa esta vazio" });

        return res.status(200).json({ message: "Ajuste Realizado" });
      }
      return res.json({
        caixa
      });
  }
}
module.exports = new AjusteCaixaController()