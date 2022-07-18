const sum = require('./sum.js');

describe('A função deve retornar a soma entre 2 valores passados', () => {
  it('A soma entre 4 e 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('A soma entre 0 e 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('A soma entre 4 e "5" = retorna erro', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });
  it('Mensagem de erro tem que ser "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  });
});

// 1. Teste se o retorno de sum(4, 5) é 9
// 2. Teste se o retorno de sum(0, 0) é 0
// 3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
// 4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
