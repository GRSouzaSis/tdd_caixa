const routes = require('express').Router()

const CaixaController = require('./app/controllers/CaixaController')
const AjusteCaixaController = require('./app/controllers/AjusteCaixaController')

routes.post('/caixa', CaixaController.createCaixa)
routes.post('/realizar_ajuste', AjusteCaixaController.realizarAjuste)

module.exports = routes;