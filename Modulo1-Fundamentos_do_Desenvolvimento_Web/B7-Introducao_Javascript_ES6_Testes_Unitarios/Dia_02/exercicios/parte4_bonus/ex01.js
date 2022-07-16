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

const allLessons = Object.assign({});
allLessons.lesson1 = lesson1;
allLessons.lesson2 = lesson2;
allLessons.lesson3 = lesson3;

// Funcionalidade que retorna quantidade de alunos que assistiram a aula de determinada matéria.
// const totalAlunosPorMateria = (estrutura, materia) => {
//   let somaAlunos = null;
//   const listaObjetos = Object.values(estrutura);
//   for (let indice in listaObjetos) {
//     let lista = Object.values(listaObjetos[indice]);
//     if (lista[0] === materia) {
//       somaAlunos += lista[1];
//     };
//   };
//   return `Total de alunos que assistiram as aulas de matemática: ${somaAlunos} alunos.`;
// };
// console.log(totalAlunosPorMateria(allLessons, 'Matemática'));

// Funcionalidade que traz relatório de atividade de um professor.
// const relatorio = (estrutura, professor) => {
//   const objectList = Object.values(estrutura);
//   const classList = [];
//   let somaAlunos = null;
//   const teacherRelatorio = {};
//   for (let indice in objectList) {
//     let lista = Object.values(objectList[indice]);
//     if (lista[2] === professor) {
//       classList.push(lista[0]);
//       somaAlunos += lista[1];
//       teacherRelatorio.professor = lista[2];
//       teacherRelatorio.aulas = classList;
//       teacherRelatorio.estudantes = somaAlunos;
//     };
//   };
//   return teacherRelatorio;
// };
// console.log(relatorio(allLessons, 'Maria Clara'));
