var y;
var v=3;
var dir=-1;

function setup(){
  createCanvas(400,400);
  y=height/2;
}

function draw() {
  background (0,0,0,10);
  triangle (width/2,y, 0+20,height-20, width-20,height-20);
  y+=v*dir;
  if (y<0 || y>height-20){
    dir=-dir;
  }
}
