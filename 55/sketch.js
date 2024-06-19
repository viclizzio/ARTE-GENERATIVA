var y=0;
var y1;

var v=3;
var dir=1; 

function setup(){
  createCanvas (500,500);  

  y1=height;
}

function draw(){
  background (0,255,0);
  strokeWeight (5);

  line (0,y, width,y1);

  y+=v*dir
  y1-=v*dir

  if (y>=height || y1>=height){
    dir=-dir
  }
}