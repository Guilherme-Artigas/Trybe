// 1 - Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina). 
const myName = 'Guilherme';

// 2 - Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
const birthCity = 'Rio Branco do sul';

// 3 - Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu. 
let birthYear = 1992;

// 4 - Utilize o console.log() para imprimir as constantes e variáveis que você criou. 
console.log(`Olá ${myName}, sua cidade natal é ${birthCity}, e o ano que você nasceu é ${birthYear}`);

// 5 - Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece! 
birthYear = 2030;
console.log(`Valor da variável birthYear alterado para ${birthYear}`);

// 6 - Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
// R: birthCity foi declarado sendo uma constante, ou seja, não pode ter seu valor alterado!

birthCity = 'Curitiba'; // Essa declaração gera erro em nosso código.
console.log(birthCity);