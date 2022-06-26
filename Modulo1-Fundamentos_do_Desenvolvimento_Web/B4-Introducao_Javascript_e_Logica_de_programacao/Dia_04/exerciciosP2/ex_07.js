// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be'); 
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan'); 
// Retorno esperado: false

function comparaFim (arg1, arg2) {
  if (arg1.substring(arg2.length+1) == arg2) {
    return true;
  } else {
    return false;
  };
};
console.log(comparaFim('joaofernando', 'fernan'));