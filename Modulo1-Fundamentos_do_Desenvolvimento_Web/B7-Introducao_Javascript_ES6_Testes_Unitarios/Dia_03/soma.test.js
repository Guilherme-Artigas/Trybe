const soma = (valor1, valor2) => valor1 + valor2;

test('sums two values', () => {
    expect(soma(3, 5)).toEqual(8);
});
