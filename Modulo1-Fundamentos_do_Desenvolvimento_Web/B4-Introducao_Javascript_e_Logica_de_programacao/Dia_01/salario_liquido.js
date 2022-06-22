let salarioBruto = Math.random() * (6000 - 1) + 1;
let salarioLiquido = null;
if (salarioBruto < 1556.94) {
  salarioLiquido = salarioBruto - (salarioBruto * 8 / 100);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioLiquido = salarioBruto - (salarioBruto * 9 / 100);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioLiquido = salarioBruto - (salarioBruto * 11 / 100);
} else if (salarioBruto > 5189.82) {
  salarioLiquido = salarioBruto - 570.88;
};

if (salarioLiquido < 1903.98) {
  console.log(`Faixa salarial de até R$ 1.903,98 estão isentos do imposto de renda.`);
} else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
  salarioLiquido -= (salarioLiquido * 7.5 / 100) - 142.80;
  console.log(`R$ ${salarioLiquido.toFixed(2)}`);
} else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
  salarioLiquido -= (salarioLiquido * 15 / 100) - 354.80
  console.log(`R$ ${salarioLiquido.toFixed(2)}`);
} else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.67) {
  salarioLiquido -= (salarioLiquido * 22.5 / 100) - 636.13
  console.log(`R$ ${salarioLiquido.toFixed(2)}`);
} else if (salarioLiquido > 4664.68) {
  salarioLiquido -= (salarioLiquido * 27.5 / 100) - 869.36
  console.log(`R$ ${salarioLiquido.toFixed(2)}`);
};