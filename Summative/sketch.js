// varbles for the code for things like:
// the size of the player ball
// the position for the rogue triangles(Trigonoids)
// the speed of the Trigonoids
// the time for the trigonoids and feeding balls
// the score
var ellipseW = 30;
var ellipseH = 30;
var posX1= 70;
var posY1 = 70;
var posX2 = 110;
var posY2 = 30;
var posX3 = 160;
var posY3 = 70;
var speedX1 = 10;
var speedY1 = 5;
var speedX2 = 4;
var speedY2 = 5;
var speedX3 = 5;
var speedY3 = 8;
var posX4= 70;
var posY4 = 60;
var posX5 = 120;
var posY5 = 30;
var posX6 = 160;
var posY6 = 80;
var speedX4 = 10;
var speedY4 = 5;
var speedX5 = 4;
var speedY5 = 5;
var speedX6 = 5;
var speedY6 = 8;
var triangletime1 = 0;
var triangletime2 = 0;
var ellipsetime1 = 5;
var ellipsetime2 = 0;
var ellipsetime3 = 0;
var ballfill1 = 185;
var ballfill2 = 270;
var ballfill3 = 230;
var ballfill4 = 170;
var ballfill5 = 120;
var ballfill6 = 190;
var score = ['score',ellipseW];
function setup() {
// the code for the screen
createCanvas(1250, 900);
background(0,0,0);
}
function draw() {
// the color of the score and were it is on the screen
fill (170,185,190);
text(score,2,9);
//the code that changes the color of the players ball if it touches any point of the Trigonoids
if(mouseX == posX1 && mouseY == posY1){
ballfill4 = ballfill1;
ballfill5 = ballfill2;
ballfill6 = ballfill3;
}
if(mouseX == posY1 && mouseY == posX1){
ballfill4 = ballfill1;
ballfill5 = ballfill2;
ballfill6 = ballfill3;
}
if(mouseX == posX2 && mouseY == posY2){
ballfill4 = ballfill1;
ballfill5 = ballfill2;
ballfill6 = ballfill3;
}
if(mouseX == posY2 && mouseY == posX2){
ballfill4 = ballfill1;
ballfill5 = ballfill2;
ballfill6 = ballfill3;
}
if(mouseX == posX3 && mouseY == posY3){
ballfill4 = ballfill1;
ballfill5 = ballfill2;
ballfill6 = ballfill3;
}
if(mouseX == posY3 && mouseY == posX3){
ballfill4 = ballfill1;
ballfill5 = ballfill2;
ballfill6 = ballfill3;
}
// the changable variables for the player ball's color and placement and size
fill(ballfill4, ballfill5, ballfill6);
ellipse(mouseX, mouseY, ellipseW, ellipseH);
// the increasing times for the Trigonoids and the feeding ball to appear
triangletime2 = triangletime2 + 2;
triangletime1 = triangletime1 + 5;
ellipsetime1 = ellipsetime1 + 20;
ellipsetime2 = ellipsetime2 + 10;
ellipsetime3 = ellipsetime3 + 5;
fill(random(255),random(255),random(255));
if(triangletime1 > 215){
// the code need some the Trigonoids don't go of the screen
if (posX1 > width){
speedX1 = -speedX1;
}
if (posX1 < 0){
speedX1 = -speedX1;
}
if (posY1 > height){
speedY1 = -speedY1;
}
if (posY1 < 0){
speedY1 = -speedY1;
}
if (posX2 > width){
speedX2 = -speedX2;
}
if (posX2 < 0){
speedX2 = -speedX2;
}
if (posY2 > height){
speedY2 = -speedY2;
}
if (posY2 < 0){
speedY2 = -speedY2;
}
if (posX3 > width){
speedX3 = -speedX3;
}
if (posX3 < 0){
speedX3 = -speedX3;
}
if (posY3 > height){
speedY3 = -speedY3;
}
if (posY3 < 0){
speedY3 = -speedY3;
}
// the code for how the Trigonoids will move
triangle(posX1,posY1,posX2,posY2,posX3,posY3)};
posX1 = posX1 + speedX1;
posY1 = posY1 + speedY1;
posX2 = posX2 + speedX2;
posY2 = posY2 + speedY2;
posX3 = posX3 + speedX3;
posY3 = posY3 + speedY3;
// repeating the code for the other Trigonoid
fill(random(255),random(255),random(255));
if(triangletime2 > 210){
if (posX4 > width){
speedX4 = -speedX4;
}
if (posX4 < 0){
speedX4 = -speedX4;
}
if (posY4 > height){
speedY4 = -speedY4;
}
if (posY4 < 0){
speedY4 = -speedY5;
}
if (posX5 > width){
speedX5 = -speedX5;
}
if (posX5 < 0){
speedX5 = -speedX5;
}
if (posY5 > height){
speedY5 = -speedY5;
}
if (posY5 < 0){
speedY5 = -speedY5;
}
if (posX6 > width){
speedX6 = -speedX6;
}
if (posX6 < 0){
speedX6 = -speedX6;
}
if (posY6 > height){
speedY6 = -speedY6;
}
if (posY6 < 0){
speedY6 = -speedY6;
}
triangle(posX4,posY4,posX5,posY5,posX6,posY6)};
posX4 = posX4 + speedX4;
posY4 = posY4 + speedY4;
posX5 = posX4 + speedX5;
posY5 = posX5 + speedX5;
posX6 = posX6 + speedY6;
posY6 = posX6 + speedY5;
if(ellipsetime2 > 1720){
fill(ballfill1, ballfill2, ballfill3);
// if stament for when the players ball touches the feeding balls and gets bigger (and changes the color of the feeding ball)
ellipse(520,345,20,20)};
if(mouseX == 520 && mouseY == 345){
ellipseW = ellipseW+15;
ellipseH = ellipseH+15;
ballfill1 = ballfill4;
ballfill2 = ballfill5;
ballfill3 = ballfill6;
}
// repeat code for another feeding ball
if(ellipsetime1 > 460){
fill(ballfill1, ballfill2, ballfill3);
ellipse(360,750,20,20)};
if(mouseX == 360 && mouseY == 750){
ellipseW = ellipseW+15;
ellipseH = ellipseH+15;
ballfill1 = ballfill4;
ballfill2 = ballfill5;
ballfill3 = ballfill6;
}
// another feeding ball
if(ellipsetime3 > 720){
fill(ballfill1, ballfill2, ballfill3);
ellipse(540,680,20,20)};
if(mouseX == 540 && mouseY == 680){
ellipseW = ellipseW+15;
ellipseH = ellipseH+15;
ballfill1 = ballfill4;
ballfill2 = ballfill5;
ballfill3 = ballfill6;
}
}
