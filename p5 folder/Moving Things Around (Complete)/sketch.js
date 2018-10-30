//position variables
var posX= 180;
var posY = 180;
// speed variables
var speedX = 5;
var speedY = 5;

function setup() {
 var myCanvas = createCanvas(600,600);
 frameRate(20); // 20 frames per second
}
function draw() {
 background(170,120,190);
 ellipse(posX, posY, 30, 45); // draw a small circle
 //change the position by adding to the position
stroke(170,120,190);
fill(0,0,0);
 posX = posX + speedX;
 posY = posY + speedY;
}
function mouseClicked() {
// when the user clicks the mouse,
// put the position of the object where the mouse is
posX = mouseX;
posY = mouseY;
// and make the speed a small fraction of the position
speedX = round(mouseX/100);
speedY = round(mouseY/100);
}
