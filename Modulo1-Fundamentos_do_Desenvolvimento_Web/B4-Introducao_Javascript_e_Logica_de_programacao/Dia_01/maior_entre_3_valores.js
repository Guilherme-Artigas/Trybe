const a = Math.floor(Math.random() * (10 - 1) + 1);
const b = Math.floor(Math.random() * (10 - 1) + 1);
const c = Math.floor(Math.random() * (10 - 1) + 1);
console.log(`3 valores gerados randomicamente: ${a} ${b} ${c}`);

if (a > b && a > c) {
  console.log(a);
} else {
  if (b > a && b > c) {
    console.log(b);
  } else {
    if (c > a && c > b) {
      console.log(c);
    };
  };
};