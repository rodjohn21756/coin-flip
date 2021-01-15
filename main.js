let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    if (Math.random() * 100 < 50) {
      this.state = 0;
    } else {
      this.state = 1;
    }
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    if (this.state === 0) {
      return "Heads";
    }
    if (this.state === 1) {
      return "Tails";
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "heads_quarter.jpg";
    }
    if (this.state === 1) {
      image.src = "tails_quarter.jpg";
    }
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

coin.flip();
document.body.append(coin.toString());

coin.flip();
document.body.append(coin.toHTML());

function Display20Flips() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    document.body.append(coin.toString());
  }
}
Display20Flips();

function Display20Images() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    document.body.append(coin.toHTML());
  }
}
