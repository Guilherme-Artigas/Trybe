function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

console.log(myFizzBuzz(5));

// implemente seus testes aqui

test('Verifica se Número é divisível por 3 e por 5, o retorno deve ser "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('Verifica se Número é divisível apenas por 3, o retorno deve ser "fizz"', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

test('Verifica se o número é divisível apenas por 5, o retorno deve ser "buzz"', () => {
  expect(myFizzBuzz(25)).toBe('buzz');
});

test('Verifica se o número não é divisível por 3 e por 5, o retorno deve ser o próprio número', () => {
  expect(myFizzBuzz(7)).toBe(7);
});

test('Verifica se o valor é um número, o retorno deve ser "false"', () => {
  expect(myFizzBuzz('tetse')).toBe(false);
});
