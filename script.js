class Pet {
  constructor(id) {
    this.id = id;
    this.fedLevel = 100;
    this.fedElement = document.getElementById(`hunger${id}`);
    this.messageElement = document.getElementById(`message${id}`);
    this.displayElement = document.getElementById(`pet${id}`);
  }
  feed(amount) {
    this.fedLevel += amount;
    if (this.fedLevel > 100) {
      this.fedLevel = 100;
    }
    this.fedElement.innerHTML = this.fedLevel;
  }
  decreaseFedLevel() {
    this.fedLevel -= 10;
    if (this.fedLevel < 0) {
      this.fedLevel = 0;
    }
    this.fedElement.innerHTML = this.fedLevel;
    if (this.fedLevel === 0) {
      this.messageElement.innerHTML = "Pet ran away";
      this.displayElement.style.opacity = 0.5;
    }
  }
}

function feedPet(amount) {
  pet1.feed(amount);
}

setInterval(() => {
  pet1.decreaseFedLevel();
}, 5000);

const pet1 = new Pet(1);
