//Declares global variables
let scene = 0;
let loss = false;

function setup() {
  createCanvas(500, 600);

  player = new Player();
  opponent = new Opponent();
  question = new Question();
  button = new Button();
  backdrop = new Background();
}

function draw() {
  background(220);

  if (scene == 0) {
    intro();
  } else if (scene == 1) {
    tutorial();
  } else if (scene == 2) {
    game();
  }
}

//Creates the opening scene
function intro() {
  //Creates the backgroud and text
  background("#00BCD4");
  fill("#E91E63");
  textSize(35);
  stroke("#FFF4F8");
  strokeWeight(4);
  text("Welcome to C5! The cool,", 20, height / 3);
  text("catchy, courageous, cart", 25, height / 3 + 45);
  text("contest!", 160, height / 3 + 90);

  fill("white");
  strokeWeight(0);
  textSize(20);
  textFont("monospace", 22);
  text("Click anywhere to continue!", 80, height / 3 + 140);

  //A small white dot is drawn and follows the mouse pointer around
  noStroke();
  fill("white");
  ellipse(mouseX, mouseY, 10, 10);
}

//Explains the game
function tutorial() {
  //Creates the backgroud and text
  background("#00BCD4");
  fill("#E91E63");
  textSize(35);
  stroke("#FFF4F8");
  strokeWeight(4);
  text("How to Play,", 20, height / 4 - 15);

  fill("white");
  strokeWeight(0);
  textSize(20);
  textFont("monospace", 22);

  text("The game is simple: math questions ", 20, height / 4 + 30);
  text("will pop up near the bottom of the ", 20, height / 4 + 70);
  text("screen and you must type the correct ", 20, height / 4 + 110);
  text("answer in the box under it (and click ", 20, height / 4 + 150);
  text("the submit button) to boost the speed ", 20, height / 4 + 190);
  text("of your blue cart! Your objective: ", 20, height / 4 + 230);
  text("beat the opposing red cart to the ", 20, height / 4 + 270);
  text("finish line!", 20, height / 4 + 310);
}

//The game
function game() {
  backdrop.show();
  player.show();
  opponent.show();
  question.show();
  button.show();
  backdrop.scroll(-5);
  backdrop.rand();

  if (button.ans == question.ans) {
    question.correct++;
    question.rand();
    player.boost(10);
  } else if (button.ans != question.ans) {
    opponent.boost(0.03);
  }

  if (backdrop.finishLineX < player.x && loss == false) {
    victory();
  } else if (backdrop.finishLineX < opponent.x) {
    defeat();
    loss = true;
  }
}

//Displays the victory screen
function victory() {
  //Hides the button
  button.hide();
  input.position(-100, -100);

  //Creates the backgroud and text
  background(7, 127, 127);
  fill("black");
  textSize(60);
  stroke("white");
  strokeWeight(4);
  text("YOU WIN!", 85, height / 3 + 40);
  fill("white");
  strokeWeight(0);
  textSize(20);
  text("Yahoo! You beat the red cart and won the race! ", 25, height / 3 + 80);
  text("Congrats on the win, new C5 Champion! Clearly, ", 25, height / 3 + 120);
  text("you are worthy to uphold such a title!", 25, height / 3 + 160);
}

//Displyas the defeat screen
function defeat() {
  //Hides the button
  button.hide();
  input.position(-100, -100);

  //Creates the backgroud and text
  background(197, 7, 7);
  fill("black");
  textSize(60);
  stroke("white");
  strokeWeight(4);
  text("YOU LOSE!", 85, height / 3 + 40);
  fill("white");
  strokeWeight(0);
  textSize(20);
  text(
    "Looks like the red cart beat you to the finish line.",
    25,
    height / 3 + 80
  );
  text("Better luck next time I suppose!", 25, height / 3 + 120);
}

//Allows the user to proceed to the next scene by clickling the mouse
function mousePressed() {
  if (scene < 2) {
    scene++;
  }
}
