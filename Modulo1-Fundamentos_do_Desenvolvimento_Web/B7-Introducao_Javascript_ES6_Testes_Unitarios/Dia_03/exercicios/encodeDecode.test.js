const { encode , decode } = require('./encodeDecode.js');

test('encode e decode devem ser funções!', () => {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function');
});

test('encode deve receber "a","e","i","o","u" e retornar 1, 2, 3, 4, 5 respectivamente', () => {
  expect(encode('a')).toBe(1);
  expect(encode('e')).toBe(2);
  expect(encode('i')).toBe(3);
  expect(encode('o')).toBe(4);
  expect(encode('u')).toBe(5);
});
