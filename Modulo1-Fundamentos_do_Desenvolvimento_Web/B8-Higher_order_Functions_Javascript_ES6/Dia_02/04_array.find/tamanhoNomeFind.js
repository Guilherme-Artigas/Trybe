const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  // Adicione seu código aqui:
  return names.find((elemento) => elemento.length === 5);
}

console.log(findNameWithFiveLetters(names));