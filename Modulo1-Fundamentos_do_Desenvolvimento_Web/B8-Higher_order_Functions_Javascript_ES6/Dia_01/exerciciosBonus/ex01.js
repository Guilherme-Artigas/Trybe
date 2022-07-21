const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: (callback) => callback(dragonDamage),
};

const battleMembers = { mage, warrior, dragon };
// Math.floor(Math.random() * (max - min)) + min;
const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);
// console.log(`Dano do dragão foi de ${dragonDamage()} pontos.`);
const warriorDamage = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength);
// console.log(`Dano do guerreiro foi de ${warriorDamage()} pontos.`)
const mageDamage = () => ({
  damage1: mage.mana < 15 ? 0 : Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence,
  manaLow: mage.mana -= 15,
});
// console.log(`Dano do mago foi de ${mageDamage().damage1} pontos.`);
console.log(dragon.damage);
