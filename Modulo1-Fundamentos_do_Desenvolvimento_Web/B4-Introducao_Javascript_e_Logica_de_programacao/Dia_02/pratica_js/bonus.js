let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let ie = 1; ie < numbers.length; ie+=1) {
//   for (let ii = 0; ii < ie; ii+=1) {
//     Ordenando de forma crescente! Para ordernar de forma decrescente basta trocar o sinal de < para >!
//     if (numbers[ie] < numbers[ii]) {
//       let auxiliar = numbers[ie];
//       numbers[ie] = numbers[ii];
//       numbers[ii] = auxiliar;
//     };
//   };
// };

let newArray = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i+1]) {
    newArray.push(numbers[i] * numbers[i+1]);
  } else {
    newArray.push(numbers[i] * 2);
  }
};
console.log(newArray);