let col = 0;
let b = 0;
let r = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(HAND, 32, 32)
}

function draw() {
  background(r, 0, b);

  b = map(mouseX, 0, windowWidth, 0, 255);
  r = map(mouseX, 0, windowWidth, 0, 255);

  //maps color range from 0 -> 255 with mouseX position
  col = map(mouseX, 0, windowWidth, 0, 255);

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



  // //vertical slider
  // line(mouseX, 0, mouseX, windowHeight)
  //create mouse press function that allows circle to move the same path as line with a limit to each edge of line
}
