const request = require('supertest')
const app = require('../../src/app')
const { Ajuste } = require("../../src/app/models")
const truncate = require('../utils/truncate')
describe("Ajuste de Caixa", () => {
    beforeEach(async () => {
        await truncate()
    })
    it("Ajuste de caixa com valor zerado e caixa fechado", async () => {
        const response = await request(app)
            .post('/realizarAjuste')
            .send({
                valor: 0.00,
                data: Date.now(),
                motivo:"",
                tipo:"Entrada",
                created_at: Date.now(),
                updated_at: Date.now()
            })
        expect(response.status).toBe(401);
    });
    it("Ajuste de caixa com valor positivo e caixa fechado", async () => {
        const response = await request(app)
            .post('/realizarAjuste')
            .send({
                valor: 1.00,
                data: Date.now(),
                motivo:"",
                tipo:"Entrada",
                created_at: Date.now(),
                updated_at: Date.now()
            })
        expect(response.status).toBe(401);
    });
    it("Ajuste de caixa com valor positivo e caixa fechado tipo saida", async () => {
        const response = await request(app)
            .post('/realizarAjuste')
            .send({
                valor: 4.00,
                data: Date.now(),
                motivo:"",
                tipo:"sangria",
                created_at: Date.now(),
                updated_at: Date.now()
            })
        expect(response.status).toBe(401);
    });
    it("Ajuste de caixa com valor zerado e caixa aberto tipo entrada", async () => {
        const response = await request(app)
            .post('/realizarAjuste')
            .send({
                valor: 0.00,
                data: Date.now(),
                motivo:"",
                tipo:"entrada",
                created_at: Date.now(),
                updated_at: Date.now()
            })
        expect(response.status).toBe(401);
    });
    it("Ajuste de caixa com valor zerado e caixa aberto tipo entrada", async () => {
        const response = await request(app)
            .post('/realizarAjuste')
            .send({
                valor: 0.00,
                data: Date.now(),
                motivo:"Pagamento",
                tipo:"entrada",
                created_at: Date.now(),
                updated_at: Date.now()
            })
        expect(response.status).toBe(401);
    });
    it("Ajuste de caixa com valor positivo maior do que tem em caixa, caixa aberto tipo saida", async () => {
        const response = await request(app)
            .post('/realizarAjuste')
            .send({
                valor: 1200,
                data: Date.now(),
                motivo:"Pagamento de Funcionario",
                tipo:"sangria",
                created_at: Date.now(),
                updated_at: Date.now()
            })
        expect(response.status).toBe(401);
    });
    it("Ajuste de caixa com valor positivo caixa aberto tipo entrada", async () => {
        const response = await request(app)
            .post('/realizarAjuste')
            .send({
                valor: 20,
                data: Date.now(),
                motivo:"Deposito",
                tipo:"entrada",
                created_at: Date.now(),
                updated_at: Date.now()
            })
        expect(response.status).toBe(401);
    });
    it("Ajuste de caixa com valor positivo caixa aberto tipo saida", async () => {
        const response = await request(app)
            .post('/realizarAjuste')
            .send({
                valor: 10,
                data: Date.now(),
                motivo:"comprar recurso",
                tipo:"sangria",
                created_at: Date.now(),
                updated_at: Date.now()
            })
        expect(response.status).toBe(401);
    });
});
