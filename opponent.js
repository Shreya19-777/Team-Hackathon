//This is the code for the opponent's cart
function Opponent() {
  this.x = width / 4;
  this.y = height - 320;
  this.cartR = 50;
  this.wheelR = 25;
  
  //Creates the opponent's cart
  this.show = function () {
    fill('#FF495C');
    stroke('rgb(197,34,34)');    
    strokeWeight(1);
    rectMode(CENTER);
    rect(constrain(this.x, 100, 700), this.y - 25, this.cartR * 3.7 , this.cartR);
    ellipse(constrain(this.x - this.cartR, 100 - this.cartR, 700 - this.cartR), this.y, this.wheelR * 1.8, this.wheelR * 1.8);
    ellipse(constrain(this.x + this.cartR, 100 + this.cartR, 700 + this.cartR), this.y, this.wheelR * 1.8, this.wheelR * 1.8);
  };

  //Increases the opponent's cart's speed gradually
  this.boost = function (dir) {
    this.x += dir;
  };
}
