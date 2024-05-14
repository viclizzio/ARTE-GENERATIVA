var x;
var y;
var v;
var dir=1;
var d=50;
var c;

function setup() {
  createCanvas(400,400);
  x=width/2;
  y=height/2;
  c=0;
  v=random (2,10);
  noStroke ();
}

function draw() {
  background(c);
  
  fill (255-red(c),255-green(c),255-blue(c));
  ellipse(x,y,d,d); // ellipse (xc,yc,do,dv)
  d+=v*dir; // Cambia la dimensione
  if(d<=0 || y>=width-d/2) {
    c=color(random(255),random(255),random(255));
    dir=-dir;
  } 
}

