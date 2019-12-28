function setup() {
  let canvas = createCanvas(displayWidth, displayHeight);
  frameRate(100);
  canvas.id("sketch");
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 250);
}
