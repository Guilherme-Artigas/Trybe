const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const somaPares = numbers.filter((e) => e % 2 === 0).reduce((acc, cur) => acc + cur);
const somaPares = numbers.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc);
console.log(somaPares);

