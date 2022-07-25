const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const menores = objPeople.filter((e) => e.age < 18);
console.log(menores);
// const verifyAgeDrive = (arrayOfPeople) => (
//   arrayOfPeople.filter((people) => (people.age < 18))
// );

// console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
