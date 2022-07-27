const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: firstName, b: classAssigned, c: subject } = student;

console.log(firstName); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
