const custo = 200 * 1.20;
const valor = 312;
let lucro;

if (custo > 0 && valor > 0) {
  lucro = (valor - custo) * 1000;
  console.log(`Lucro de R$${lucro}`);
} else {
  console.log('ERRO!!! Existe um valor negativo!');
};
