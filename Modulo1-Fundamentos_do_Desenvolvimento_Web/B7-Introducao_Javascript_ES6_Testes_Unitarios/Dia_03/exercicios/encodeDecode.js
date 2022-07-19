function encode (letra) {
  if (letra === 'a') return 1;
  if (letra === 'e') return 2;
  if (letra === 'i') return 3;
  if (letra === 'o') return 4;
  if (letra === 'u') return 5;
  // return letra;
};

function decode (numero) {
  
  // return numero;
};

module.exports = { encode , decode };
