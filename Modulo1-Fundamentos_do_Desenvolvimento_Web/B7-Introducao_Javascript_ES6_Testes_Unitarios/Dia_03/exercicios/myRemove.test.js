function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});


// describe('A função deve retornar a soma entre 2 valores passados', () => {
//   it('A soma entre 4 e 5 = 9', () => {
//     expect(sum(4, 5)).toBe(9);
//   });
//   it('A soma entre 0 e 0 = 0', () => {
//     expect(sum(0, 0)).toBe(0);
//   });
//   it('A soma entre 4 e "5" = retorna erro', () => {
//     expect(() => sum(4, '5')).toThrow(Error);
//   });
//   it('Mensagem de erro tem que ser "parameters must be numbers"', () => {
//     expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
//   });
// });
