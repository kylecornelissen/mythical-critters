class Wizard {
  constructor(info) {
    // console.log(info.bearded || true)
    this.name = info.name;
    // OR this.name = name['name'];
    this.bearded = (info.bearded === false) ? false: true;
    // OR this.bearded = info.bearded !== false
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
