class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankCount = 0;
  }
  shoot() {
    if (this.cranky === false && this.layingDown === false) {
      this.crankCount++;
      if (this.crankCount === 3) this.cranky = true;
      return 'Twang!!!'
    } else {
      return 'NO!'
    }
  }
  run() {
    if (this.layingDown === false) {
      this.crankCount++;
      if (this.crankCount === 3) this.cranky = true;
      return 'Clop clop clop clop!!!'
    } else {
      return 'NO!'
    }
  }
  sleep() {
    if (this.standing === false) {
      this.crankCount = 0;
      this.cranky = false;
      return 'ZZZZ'
    } else {
      return 'NO!'
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === true && this.cranky === true) {
      this.crankCount = 0;
      this.cranky = false;
    } else if (this.standing === true) {
      this.cranky = true;
    } else {
      return 'Not while I\'m laying down!'
    }
  }
};

module.exports = Centaur;
