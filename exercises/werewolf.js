class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hunger = false;
    this.victims = [];
  }
  change() {
    if (this.human === true) {
      this.human = false;
      this.wolf = true;
      this.hunger = true;
    } else {
      this.human = true;
      this.wolf = false;
      this.hunger = false;
    }
  }
  // change() {
      // this.human = !this.human;
      // this.wolf = !this.wolf;
      // this.hunger = !this.hunger;
  // }
  eat(victim) {
    if (this.hunger === true) {
      this.victims.push(victim);
      this.change();
      victim.alive = false;
    }
  }
}

module.exports = Werewolf;
