class Wizard {
  constructor(obj) {
    // console.log(obj.bearded || true)
    this.name = obj.name;
    // OR this.name = name['name'];
    this.bearded = (obj.bearded === false) ? false: true;
    // OR this.bearded = obj.bearded !== false
    this.isRested = true;
    this.castCount = 0;
  }
  incantation(phrase) {
    return phrase.toUpperCase();
  }
  cast() {
    this.castCount++;
    if (this.castCount >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST!'
    } else {
      return 'MAGIC BULLET'
    }
  }
}

module.exports = Wizard;
