const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => array.reduce((acc, crr) => {
  const newArray = [];
  newArray.push(acc + ' ' + crr);
  return newArray;
});
console.log(flatten(arrays));
