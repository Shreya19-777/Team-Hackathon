function Button() {
  this.x = 30;
  this.y = 540;
  this.ans = 1000;

  this.show = function () {
    input = createInput();
    input.position(this.x, this.y);

    button = createButton("Submit");
    button.position(input.x + input.width, this.y);

    button.mousePressed(next);
  };

  function next() {
    this.ans = input.value();
    input.value("");
  }
}
