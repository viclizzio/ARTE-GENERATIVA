var t="ABACATANIA è la migliore accademia di via franchetti";
var f;

function preload(){
  f=loadFont("./assets/testobello.ttf");
}

function setup() { 
  createCanvas (500,500);

}

function draw() {
  background (0);

  fill (255);
  textSize (50);
  textFont (f);
  stroke (255,0,0);
  strokeWeight (3);
  textAlign (CENTER,CENTER);
  text (t, 0, 0, width, height);

  strokeWeight (2);
  stroke (0,255,0);
  line (width/2, 0, width/2, height);
  line (0, height/2, width, height/2);
}