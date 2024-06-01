var x;
var y;
var v;
var dir=1;
var d=50;
var c;

function setup() {
  createCanvas (400,400);

  x=width/2;
  y=height/2;

  c=color (random(255),random(255),random(255));

  v=random (2,10); // Velocità casuale da 2 a 10 ogni volta che si aggiorna la pagina
}

function draw() {
  background (c);

  fill (255-red(c),255-green(c),255-blue(c)); // Riempie con il colore complementare
  ellipse (x,y,d,d-10); // ellipse (xc, yc, do, dv)

  y+=v*dir;

  if (y<=d/2 || y>=height-d/2) {
    c=color (random(255),random(255),random(255)); // Cambia colore random
    dir=-dir;
  } 
}

