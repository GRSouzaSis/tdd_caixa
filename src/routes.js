const routes = require('express').Router()

const CaixaController = require('./app/controllers/CaixaController')

routes.post('/caixa', CaixaController.createCaixa)

module.exports = routes;