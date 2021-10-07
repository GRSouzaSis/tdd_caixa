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
            status: 'aberto',
            created_at: Date.now(),
            updated_at: Date.now()
        })
        const response = await request(app)
            .post('/Caixa')
            .send({
                saldo: 100.00,
                status: 'aberto'
            })
        expect(response.status).toBe(200);
    });
    it("Abrir caixa com valor zerado", async () => {
        const caixa = await Caixa.create({
            saldo: 0.00,
            status: 'aberto',
            created_at: Date.now(),
            updated_at: Date.now()
        })
        const response = await request(app)
            .post('/Caixa')
            .send({
                saldo: 10.00,
                status: 'aberto'
            })
        expect(response.status).toBe(200);
    });
    
});
