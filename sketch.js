col = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(col);

  //maps color range from 0 -> 255 with mouseX position
  col = map(mouseX, 0, windowWidth, 0, 255);
}
