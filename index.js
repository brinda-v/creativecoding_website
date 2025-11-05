function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
}

function draw() {
  redVal = map(mouseX, 0, width, 0, 255);
  greenVal = map(mouseY, 0, height, 0, 255);
  background(redVal, greenVal, 150);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}