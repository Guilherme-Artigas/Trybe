// 3 - Crie uma HOF que receberá três parâmetros:
  // O primeiro será um array de respostas corretas (Gabarito); 
  // O segundo será um array contendo as respostas fornecidas por uma pessoa estudante; 
  // O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
    // Uma resposta correta adiciona 1 ponto à pontuação final; 
    // A ausência de uma resposta não altera a pontuação (quando for "N.A"); 
    // Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays: 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const hof1 = (array1, array2, funcao) => funcao(array1, array2);

const hof2 = (arg1, arg2) => {
  let totalPontos = null;
  for (let indice = 0; indice < arg1.length; indice += 1) {
    if (arg1[indice] === arg2[indice]) {
      totalPontos += 1;
    };
    if (arg2[indice] !== 'N.A') {
      if (arg1[indice] !== arg2[indice]) {
        totalPontos -= 0.5;
      };
    };
  };
  return totalPontos;
};

console.log(hof1(RIGHT_ANSWERS, STUDENT_ANSWERS, hof2));
