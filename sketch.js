let col = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(HAND, 32, 32)
}

function draw() {
  background(col);

  //maps color range from 0 -> 255 with mouseX position
  col = map(mouseX, 0, windowWidth, 0, 255);

  //create line across x axis that starts and stops shortly before edges of window width
  line(0, windowHeight/2, windowWidth, windowHeight/2)
  strokeWeight(20)

  //create circle the the same y axis as line
  circle(mouseX, windowHeight/2, 20)
  //create mouse press function that allows circle to move the same path as line with a limit to each edge of line
}
