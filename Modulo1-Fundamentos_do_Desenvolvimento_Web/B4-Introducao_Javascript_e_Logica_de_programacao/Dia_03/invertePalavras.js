let palavra = 'Tryber';
let arvalap = [];
for (let i1 = palavra.length - 1; i1 >= 0; i1 -= 1) {
  arvalap.push(palavra[i1]);
};
for (let indice in palavra) {
  console.log(arvalap[indice]);
};