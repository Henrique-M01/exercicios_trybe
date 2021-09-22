const sum = require('./exercicio1.js');

describe('Testa se a funcao sum retorna a soma de dois valores', () => {
    it('A função recebe 4 e 5 e retorna 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('A função recebe 0 e 0 e retorna 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Verifica se a função lança um erro ao receber uma string', () => {
        expect(() => { sum(4, '5') }).toThrow()
    });
    it('Verifica se a mensagem de erro é: "parameters must be numbers"', () => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'))
    })

});