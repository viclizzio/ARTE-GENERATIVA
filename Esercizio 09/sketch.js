var x;
var y;
var d=100;
var cb=0; //color background
var c;

function setup() {
  createCanvas (400,400);

  x=random (d/2, width-d/2);
  y=random (d/2, height-d/2);

  c=color (random(255),random(255),random(255));

  noStroke();
}

function draw() {
  background (cb);

  fill (c);
  ellipse (x,y,d,d);

  if (dist(mouseX,mouseY, x,y)<=d/2) { // Se (la distanza tra (il mouse e il cerchio) è minore o uguale al raggio) {lo sfondo diventa bianco}
    cb=255;
  }

  else { // Altrimenti {lo sfondo è nero}
    cb=0;
  }
}
