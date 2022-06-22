const a = Math.floor(Math.random() * (100 - 1) + 1);
const b = Math.floor(Math.random() * (100 - 1) + 1);
const c = Math.floor(Math.random() * (100 - 1) + 1);
console.log(`Números randomicos gerados aleatóriamente: ${a}, ${b}, ${c}`);
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
};
