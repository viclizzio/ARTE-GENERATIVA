var x=80;
var v=6;
var dir=1;
function setup() {
  createCanvas (500, 500);
  noStroke ();
 
}

function draw() {
  background (0);

  fill (map(x, 20,150, 50,255));
  triangle (width/2,height/2,width/2-x,400,width/2-x,50);
  triangle (width/2,height/2,width/2+x,400,width/2+x,50);

  fill (255);
  ellipse (width/2,height/2,40,200);

  x+=v*dir

  if (x<20 || x>150){
    dir=-dir;
  }
}