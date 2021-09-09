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
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const damageDragon = (min) => Math.floor(Math.random() * (dragon.strength - min) + min);
  
  const damageWarior = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength)
  
  function manaGastaTurno() {
      let danoEManaGasta = {
          damage: () => {
            const damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence)
            return damage;
          },
          mana: () => {
            if(mage.mana < 15) {
                return console.log('Não possui mana suficiente');
            }
            let newMana = mage.mana = mage.mana - 15
            return newMana;
          }
      };
      return danoEManaGasta;
  }
  console.log(manaGastaTurno().mana())