const fabrica = (obj, chave, valor) => {
  obj = {
    nome: chave,
    idade: valor,
  };
  return obj;
};
const obj1 = {}
console.log(fabrica(obj1, 'Guilherme', 30));
