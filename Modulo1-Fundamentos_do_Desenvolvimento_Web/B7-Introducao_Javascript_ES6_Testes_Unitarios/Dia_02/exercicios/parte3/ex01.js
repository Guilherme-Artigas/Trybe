const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const fabrica = (objeto, chave, valor) => objeto[chave] = valor;
// fabrica(lesson2, 'turno', 'Noite');
// console.log(lesson2);

// const objectKeys = objeto => Object.keys(objeto);
// console.log(`O objeto lesson1 possui as seguintes chaves: ${objectKeys(lesson1)}`);

// const tamanhoObjeto = objeto => Object.keys(objeto).length;
// console.log(`O objeto lesson3 tem ${tamanhoObjeto(lesson3)} pares chave/valor.`);

// const objectValues = objeto => Object.values(objeto);
// console.log(`O objeto lesson2 possui os seguintes valores: ${objectValues(lesson2)}`);

// const allLessons = Object.assign({});
// allLessons.lesson1 = lesson1;
// allLessons.lesson2 = lesson2;
// allLessons.lesson3 = lesson3;

// const totalAlunos = objeto => {
//   const listaObjetos = Object.values(objeto);
//   let soma = null;
//   for (let indice in listaObjetos) {
//     let lista = Object.values(listaObjetos[indice]);
//     soma += lista[1];
//   };
//   return soma;
// };
// console.log(`Número total de alunos: ${totalAlunos(allLessons)}.`);

// const valueKey = (objeto, indice) => {
//   return Object.values(objeto)[indice];
// }
// console.log(valueKey(lesson1, 1));

// const existeOuNao = (objeto, chave, valor) => {
//   return Object.keys(objeto).includes(chave) && Object.values(objeto).includes(valor);
// };
// console.log(existeOuNao(lesson3, 'materia', 'Guilherme'));