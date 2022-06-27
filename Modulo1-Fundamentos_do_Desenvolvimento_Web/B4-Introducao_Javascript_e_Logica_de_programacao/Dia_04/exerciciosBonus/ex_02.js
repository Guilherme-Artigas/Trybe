// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
function getPar (arg1) {
  let newArray = [];
  for (let indice = 0; indice < arg1.length; indice += 1) {
    for (let i of arg1[indice]) {
      if (i % 2 === 0) {
        newArray.push(i);
      };
    };
  };
  return newArray;
};
console.log(getPar(vector))