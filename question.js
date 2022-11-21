function Question() {
  this.ans = 0;
  this.randNum = floor(random(1, 4));
  this.num1 = floor(random(0, 50));
  this.num2 = floor(random(0, 50));
  this.multiply1 = floor(random(0, 12));
  this.multiply2 = floor(random(0, 12));
  this.x = 30;
  this.y = 515;

  this.rand = function () {
    this.randNum = floor(random(1, 4));
    this.num1 = floor(random(0, 50));
    this.num2 = floor(random(0, 50));
    this.multiply1 = floor(random(0, 12));
    this.multiply2 = floor(random(0, 12));

    if (this.randNum == 1) {
      text(this.num1 + " + " + this.num2 + " = ?", this.x, this.y);
      this.ans = this.num1 + this.num2;
    } else if (this.randNum == 2) {
      text(this.num1 + " - " + this.num2 + " = ?", this.x, this.y);
      this.ans = this.num1 - this.num2;
    } else if (this.randNum == 3) {
      if (this.num1 % this.multiply1 == 0) {
        text(this.num1 + " / " + this.multiply1 + " = ?", this.x, this.y);
        this.ans = this.num1 / this.multiply1;
      } else {
        text(this.multiply1 + " x " + this.multiply2 + " = ?", this.x, this.y);
        this.ans = this.multiply1 + this.multiply2;
      }
    }
  };

  this.show = function () {
    textSize(35);
    textFont("Georgia");
    fill("black");
    strokeWeight(0);
    if (this.randNum == 1) {
      text(this.num1 + " + " + this.num2 + " = ?", this.x, this.y);
      this.ans = this.num1 + this.num2;
    } else if (this.randNum == 2) {
      text(this.num1 + " - " + this.num2 + " = ?", this.x, this.y);
      this.ans = this.num1 - this.num2;
    } else if (this.randNum == 3) {
      if (this.num1 % this.multiply1 == 0) {
        text(this.num1 + " / " + this.multiply1 + " = ?", this.x, this.y);
        this.ans = this.num1 / this.multiply1;
      } else {
        text(this.multiply1 + " x " + this.multiply2 + " = ?", this.x, this.y);
        this.ans = this.multiply1 * this.multiply2;
      }
    }
  };
}
