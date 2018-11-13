// Create global variables to hold the sound and the image
var mySound;
var img;
var userStop = false;

function preload() {
  // This function runs once at the beginning and should be used to load files into variables
  mySound = loadSound('roblox-death-sound-effect-opNTQCf4R.mp3');
  img = loadImage("m6D1Hp.gif");

}

function setup() {
  createCanvas(640, 640);
  mySound.setVolume(0.5);
  mySound.play();
}

function draw() {
background(170,120,190);
  if ((mySound.isPlaying() == false) && (userStop == false)) {  // if the sound has stopped playing, play it again
    mySound.play()
  }
  image(img, 250, 300);
}

function mouseClicked() {
  // Turn off the sound if the user clicks the mouse
  mySound.stop();
  userStop = true;
}
