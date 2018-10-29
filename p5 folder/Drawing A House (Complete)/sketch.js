function setup() {
  // put setup code here
createCanvas(800,800);
}

function draw() {
  // put drawing code here
var housewidth = 200;
rect(width/2, height/2, housewidth, housewidth/2);
line(width/2, height/2, housewidth/2+width/2, height/2-housewidth/2);
line(width/2+housewidth, height/2, housewidth/2+width/2, height/2-housewidth/2);

rect(width/2, height/2, housewidth/4, housewidth/4);
line(width/2, height/2, housewidth/8+width/2, height/2-housewidth/8);
line(width/2+housewidth/4, height/2, housewidth/8+width/2, height/2-housewidth/8);
}
