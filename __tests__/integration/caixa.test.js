const request = require('supertest')
const app = require('../../src/app')
const { Ajuste, Caixa } = require("../../src/app/models")
const truncate = require('../utils/truncate')
describe("Ajuste de Caixa", () => {
    beforeEach(async () => {
        await truncate()
    })
    it("Iniciando Caixa", async () => {
        const caixa = await Caixa.create({
            saldo: 100.00,
            status: 'aberto'
        })
        const response = await request(app)
            .post('/caixa')
            .send({
                saldo: 100.00,
                status: 'aberto'
            })
        expect(response.status).toBe(200);
    });
});
