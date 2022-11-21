//This is the code for the character the player controls in the game
function Player() {
  this.x = width / 4;
  this.y = height - 185;
  this.cartR = 50;
  this.wheelR = 25;

  //Creates the player's cart
  this.show = function () {
    fill("#61CEFF");
    stroke("#127CAC");
    strokeWeight(1);
    rectMode(CENTER);
    rect(
      constrain(this.x, 100, 700),
      this.y - 25,
      this.cartR * 3.7,
      this.cartR
    );
    ellipse(
      constrain(this.x - this.cartR, 100 - this.cartR, 700 - this.cartR),
      this.y,
      this.wheelR * 1.8,
      this.wheelR * 1.8
    );
    ellipse(
      constrain(this.x + this.cartR, 100 + this.cartR, 700 + this.cartR),
      this.y,
      this.wheelR * 1.8,
      this.wheelR * 1.8
    );
  };

  //Increases the player's cart's speed when they get an answer correct
  this.boost = function (dir) {
    this.x += dir;
  };
}
