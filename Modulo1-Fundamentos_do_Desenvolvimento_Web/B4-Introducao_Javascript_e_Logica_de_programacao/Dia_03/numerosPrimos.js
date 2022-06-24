// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let qntDiv = null;
for (let i = 1; i <= 50; i += 1) {
  if (i == 1) {

  } else if (i == 2) {
    console.log(`${i} É primo!`);
  } else if (i % 2 == 0) {

  } else if (i == 3) {
    console.log(`${i} É primo!`);
  } else if (i % 3 == 0) {
    
  } else if (i == 5) {
    console.log(`${i} É primo!`);
  } else if (i % 5 == 0) {
    
  } else if (i == 7) {
    console.log(`${i} É primo!`);
  } else if (i % 7 == 0) {
    
  } else if (i == 11) {
    console.log(`${i} É primo!`);
  } else if (i % 11 == 0) {
    
  } else {
    console.log(i);
  };
};







// Tabela com os 100 primeiros números Primos
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547. 