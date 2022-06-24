let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = null;
let menor = null;
let maiorPalavra = null;
let menorPalavra = null;
for (let i in array) {
  if (i == 0) {
    maior = array[i].length;
    menor = array[i].length;
  } else if (array[i].length > maior) {
    maior = array[i].length;
    maiorPalavra = array[i];
  } else if (array[i].length < menor) {
    menor = array[i].length;
    menorPalavra = array[i];
  };
};
console.log(maiorPalavra);
console.log(menorPalavra);
