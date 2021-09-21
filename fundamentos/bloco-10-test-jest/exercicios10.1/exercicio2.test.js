const removeItem = require('./exercicio2');
const myArr = [1, 2, 3, 4];
describe('Testa se a função recebe um array e retorna uma cópia dele sem o elemento item', () => {
    it('Verifica se ao receber [1, 2, 3, 4] e 3 retorna o array sem o valor 3', () => {
        expect(removeItem(myArr, 3)).toEqual([1, 2, 4]);
    });
    it('Verifica se ao receber [1, 2, 3, 4] e 3 não retorna o mesmo array', () => {
        expect(removeItem(myArr, 3)).not.toEqual(myArr);
    });
    it('Verifica se o array passado por parâmetro não sofreu alterações', () => {
        expect(myArr).toEqual(myArr);
    });
    it('Verifica se ao receber [1, 2, 3, 4] e 5 retorna o array esperado', () => {
        expect(removeItem(myArr, 5)).toEqual(myArr);
    });
})