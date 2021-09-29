const { Ajuste } = require("../../src/app/models")
describe("Ajuste", () => {
    it("Saida de caixa", async () => {
        const ajuste = await Ajuste.create({
            valor: 100.00,
            motivo: 'aberto',
            tipo: 'saida'
        })
        console.log(ajuste)
        expect(ajuste.motivo).toBe('aberto');
    });
});
