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
  console.log(battleMembers.mage)

  const damageDragon = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);
  
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
            let newMana = mage.mana = mage.mana - 15;
            return newMana;
          }
      };
      return danoEManaGasta;
  }

  const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: function(callback){
      const damageWarior = callback();
      const newHealPointsDragon = dragon.healthPoints - damageWarior;
      warrior.damage = damageWarior;
      return dragon.healthPoints = newHealPointsDragon;
    },
    mageTurn: function(callback){
      const damageMage = callback().damage();
      const manaMage = callback().mana();
      mage.damage = damageMage;
      mage.mana = manaMage;
      dragon.healthPoints -= damageMage;
    },
    dragonTurn: function(callback){
      const damageDragon = callback();
      mage.healthPoints -= damageDragon;
      warrior.healthPoints -= damageDragon;
      dragon.damage += damageDragon;
    },
    returnBatleMembers: function(){
      const damageWarrior = gameActions.warriorTurn(damageWarior);
      const damageMana = gameActions.mageTurn(manaGastaTurno);
      const damageDrag = gameActions.dragonTurn(damageDragon);
      battleMembers.mage = damageMana;
      battleMembers.warrior = damageWarrior;
      battleMembers.dragon = damageDrag;
      return battleMembers;
    }

  };

  console.log(gameActions.returnBatleMembers());