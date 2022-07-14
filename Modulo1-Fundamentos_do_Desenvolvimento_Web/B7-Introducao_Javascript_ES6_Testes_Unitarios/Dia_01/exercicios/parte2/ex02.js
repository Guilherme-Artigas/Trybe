/*
  Crie uma função que receba uma frase e retorne a maior palavra.
  Exemplo:

  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') retorna 'aconteceu'
*/

const maiorPalavra = arg1 => {
  const listaPalavras = arg1.split(' ');
  let maiorP = null;
  for (let i of listaPalavras) {
    if (i.length > 0 || i.length >= maiorP) {
      maiorP = i;
    };
  };
  return maiorP;
};
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));
