var x;
var y;
var v=10;
var dir=1;
var d=50;
var c;

function setup() {
  createCanvas (400,400);

  x=width/2;
  y=height/2;

  c=color (random(255),random(255),random(255));
}

function draw() {
  background(c);
  
  fill (255-red(c),255-green(c),255-blue(c));
  ellipse (x,y,d,d); 

  d+=v*dir; // Cambia la dimensione

  if (d<=0 || y>=width-d/2) {
    c=color(random(255),random(255),random(255));
    dir=-dir;
  } 
}

