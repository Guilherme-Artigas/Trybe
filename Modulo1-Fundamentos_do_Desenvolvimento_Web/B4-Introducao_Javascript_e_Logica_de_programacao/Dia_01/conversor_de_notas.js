const notaNumerica = Math.floor(Math.random() * (100 - 1) + 1);
let notaAlfa
if (notaNumerica >= 90) {
  notaAlfa = 'A';
} else if (notaNumerica >= 80) {
  notaAlfa = 'B';
} else if (notaNumerica >= 70) {
  notaAlfa = 'C';
} else if (notaNumerica >= 60) {
  notaAlfa = 'D';
} else if (notaNumerica >= 50) {
  notaAlfa = 'E';
} else if (notaNumerica < 50) {
  notaAlfa = 'F';
} else if (notaNumerica < 0 || notaNumerica > 100) {
  console.log(`Houve algum erro, valor da nota ${notaNumerica}`);
};
console.log(notaAlfa);