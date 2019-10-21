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
  eat(victim) {
    if (this.hunger === true) {
      this.victims.push(victim);
      this.change();
      victim.alive = false;
    }
  }
}

module.exports = Werewolf;
