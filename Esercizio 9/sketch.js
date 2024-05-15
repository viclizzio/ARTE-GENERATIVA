var x;
var y;
var d=100;
var cb=0;
var c;

function setup() {
  createCanvas (400,400);
  x=random(d/2,width-d/2);
  y=random(d/2,height-d/2);
  c=color(random(255),random(255),random(255));
  noStroke ();
}

function draw() {
  background (cb);
  fill (c);
  ellipse (x,y,d,d);

  if (dist(mouseX,mouseY,x,y)<d/2) {
    cb=255;
  }

  // Permette che al passaggio del mouse dentro il cerchio, cambi il colore di sfondo
  else {
    cb=0;
  }
}
