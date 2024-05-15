var x;
var y;
var dir=1;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background (0);

  stroke (255, 255, 0);
  line (width/2,0,width/2,height);

  stroke (0,0,255);
  line (width/2,0,width/2,height);
}
