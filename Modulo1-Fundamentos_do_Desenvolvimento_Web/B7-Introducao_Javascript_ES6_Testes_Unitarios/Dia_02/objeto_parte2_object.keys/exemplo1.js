const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const mostraChave = objeto => {
  for (let i in objeto) {
    console.log(`Habilidade ${i}: Nível ${objeto[i]}`);
  }; 
};
console.log(mostraChave(student1));