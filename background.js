//This is the code for the moving background
function Background() {
  this.x = random(500, 1000);
  this.y = height - 480;
  this.building = 200;
  this.window = 20;
  this.road = 50;
  this.roadX = 500;
  this.finishLineX = 10000;

  this.show = function () {
    strokeWeight(1);
    rectMode(CENTER);

    //Sky
    fill("#03A9F4");
    stroke("#2196F3");
    rect(0, this.y, 1000, 245);

    //Ground
    fill("#C7C7C7");
    stroke("#4A4A4A");
    rect(0, this.y + 360, 1000, 245);

    //Walls
    fill("#DADADA");
    stroke("#7F878A");
    rect(
      constrain(this.x + this.building, -100, 1000),
      this.y,
      this.building / 2,
      this.building
    );
    rect(
      constrain(this.x, -100, 1000),
      this.y + 10,
      this.building / 1.5,
      this.building / 1.1
    );
    rect(
      constrain(this.x - this.building, -100, 1000),
      this.y + 34,
      this.building / 2.5,
      this.building / 1.5
    );

    //Doors
    fill("#90A2AA");
    stroke("#7E8C92");
    rect(
      constrain(this.x + this.building, -100, 1000),
      this.y + this.building / 4 + 5,
      this.building / 4,
      this.building / 2.2
    );
    rect(
      constrain(this.x, -100, 1000),
      this.y + this.building / 4 + 5,
      this.building / 3,
      this.building / 2.2
    );
    rect(
      constrain(this.x - this.building, -100, 1000),
      this.y + 72,
      this.building / 5,
      this.building / 3.5
    );

    //Windows
    fill("#03A9F4");
    stroke("#2196F3");
    rect(
      constrain(this.x + this.building, -100, 1000),
      this.y - this.building / 2.8,
      this.building / 3,
      this.building / 12
    );
    rect(
      constrain(this.x + this.building, -100, 1000),
      this.y - this.building / 4.7,
      this.building / 3,
      this.building / 12
    );
    rect(
      constrain(this.x + this.building, -100, 1000),
      this.y - this.building / 15,
      this.building / 3,
      this.building / 12
    );

    rect(
      constrain(this.x, -100, 1000),
      this.y - this.building / 14,
      this.building / 2,
      this.building / 10
    );
    rect(
      constrain(this.x, -100, 1000),
      this.y - this.building / 4,
      this.building / 2,
      this.building / 10
    );

    rect(
      constrain(this.x - this.building, -100, 1000),
      this.y - this.building / 12,
      this.building / 4,
      this.building / 14
    );
    rect(
      constrain(this.x - this.building, -100, 1000),
      this.y + this.building / 45,
      this.building / 4,
      this.building / 14
    );
    rect(
      constrain(this.x - this.building, -100, 1000),
      this.y + this.building / 8,
      this.building / 4,
      this.building / 14
    );

    //Road
    fill("rgb(66,66,66)");
    stroke("#070707");
    rect(0, this.y + 215, 1000, 245);

    fill("#FFEB3B");
    stroke("#FFC107");
    rect(this.roadX % 570, this.y + 215, this.road, this.road / 2.5);
    rect(
      (this.roadX + this.road * 4) % 570,
      this.y + 215,
      this.road,
      this.road / 2.5
    );
    rect(
      (this.roadX + this.road * 8) % 570,
      this.y + 215,
      this.road,
      this.road / 2.5
    );

    //Finish line
    fill("#FF1100");
    stroke("#AD0C0C");
    rect(this.finishLineX, this.y + 215, 50, 245);

    this.rand = function () {
      if (this.x < -300) {
        this.x = random(500, 1000);
      }

      if (this.roadX < -60) {
        this.roadX = 500;
      }
    };

    //Makes the screen move
    this.scroll = function (dir) {
      this.x += dir;
      this.roadX += dir;
      this.finishLineX += dir;
    };
  };
}
