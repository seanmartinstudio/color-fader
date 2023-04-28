let col = 0;

let rX = 0;
let gX = 0;
let bX = 0;

let rY = 0;
let gY = 0;
let bY = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(HAND, 32, 32)
}

function draw() {
  background(rX + rY, gX + gY, bX + bY);

  rX = map(mouseX, 0, windowWidth, 0, 255);
  gX = map(mouseX, 0, windowWidth, 0, 255);
  bX = map(mouseX, 0, windowWidth, 0, 255);

  //rY stays equal too 0 through the global variable up top
  gY = map(mouseY, windowHeight/2, 0, 0, 255);
  bY = map(mouseY, windowHeight/2, windowHeight, 0, 255);
  
  //horizontal slider
  line(0, windowHeight/2, windowWidth, windowHeight/2)
  strokeWeight(20)

  //vertical slider
  line(mouseX, 0, mouseX, windowHeight)
  strokeWeight(20)

  //horizontal circle
  circle(mouseX, windowHeight/2, 30)
  fill(0)
  //vertical circle
  circle(mouseX, mouseY, 30)
  fill(0)
}
