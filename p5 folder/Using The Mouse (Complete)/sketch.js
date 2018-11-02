function setup() {
  var firstCanvas = createCanvas(600, 600);  // create a square window for drawing
}
function draw() {
  // This function does nothing, but it must exist.
}
function mouseMoved() {
  // This function is called whenever the mouse is moved
  ellipse(mouseX, mouseY, 30, 45); // Draw a circle
}
function mouseClicked() {
  // This function is called whenever the mouse is clicked
  // (but the mouse must not be moving at the same time)
  // and will change the fill colour randomly
fill(170,120,190);
stroke(170,120,190);
}
