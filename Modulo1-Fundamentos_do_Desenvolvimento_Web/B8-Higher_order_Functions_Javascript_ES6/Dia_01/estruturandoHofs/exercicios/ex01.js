const f1 = () => 'Acordando!';
const f2 = () => 'Bora tomar café!';
const f3 = () => 'Partiu dormi!';
const doingThings = (funcao) => funcao();

console.log(doingThings(f1));
console.log(doingThings(f2));
console.log(doingThings(f3));