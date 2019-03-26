// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        if (damage >= 0) {
            this.health = this.health - damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        if (damage >= 0) {
            this.health = this.health - damage;
        }
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

/*War */

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        vikingArmy = vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        saxonArmy = saxonArmy.push(saxon);
    }
    vikingAttack() {
        const saxonNumber = Math.floor(Math.random() * saxonArmy.length);
        const randomSaxon = saxonArmy[saxonNumber];

        const vikingNumber = Math.floor(Math.random() * vikingArmy.length);
        const randomViking = vikingArmy[vikingNumber];

        const saxonDamage = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            saxonArmy.splice(saxonNumber, 1);
        }
        return saxonDamage;
    }
    saxonAttack() {
        const saxonNumber = Math.floor(Math.random() * saxonArmy.length);
        const randomSaxon = saxonArmy[saxonNumber];

        const vikingNumber = Math.floor(Math.random() * vikingArmy.length);
        const randomViking = vikingArmy[vikingNumber];

        const vikingDamage = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            vikingArmy.splice(vikingNumber, 1);
        }
        return vikingDamage;
    }
    showStatus() {
        if (saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
