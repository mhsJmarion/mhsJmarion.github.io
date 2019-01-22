function setup() {
createCanvas(1250,900);
}

var iriswidth=150;
var irisheight=160;
var pupilwidth=100;
var pupilheight=100;

function draw() {
//draw iris
fill(185,270,230);
stroke(185,270,230);
ellipse(width/2,height/3,iriswidth,irisheight);
ellipse(width/4,height/3,iriswidth,irisheight);

//draw pupil
fill(0,0,0);
stroke(0,0,0);
ellipse(width/2,height/3+15,pupilwidth,pupilheight);
ellipse(width/4,height/3+15,pupilwidth,pupilheight);
}
