let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qntImpares = null;
for (let i of numbers) {
  if (i % 2 !== 0) {
    qntImpares += 1;
  };
};
if (qntImpares > 0) {
  console.log(`Quantidade de valores ímpares dentro do array: ${qntImpares}`);
} else {
  console.log(`Não foi encontrado nenhum valor impar dentro do array!`);
};