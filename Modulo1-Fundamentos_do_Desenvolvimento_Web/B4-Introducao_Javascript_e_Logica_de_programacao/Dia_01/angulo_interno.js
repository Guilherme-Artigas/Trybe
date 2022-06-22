const a = 30;
const b = 60;
const c = 90;
const somaAngulos = a + b + c;
if (a > 0 && b > 0 && c > 0) {
  if (somaAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('ERRO!');
};