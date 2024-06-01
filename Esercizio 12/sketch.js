var x=0;
var v=5;
var dir=1;

function setup(){
  createCanvas(400,400);

  strokeWeight(2);
}

function draw() {
  background (0);

  stroke (255, 255, 0);
  line (width/2,0, x,height);

  stroke (0, 255, 255);
  line (width/2,height, width-x,0);

  
  x+=v*dir;

  if (x<=0 || x>=width){
    dir=-dir}
}
