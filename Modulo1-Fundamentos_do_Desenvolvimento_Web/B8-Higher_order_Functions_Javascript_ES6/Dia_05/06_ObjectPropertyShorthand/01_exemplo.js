const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

const newUser2 = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser2(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }