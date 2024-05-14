var y;
var v=3;
var dir=1

function setup() {
  createCanvas(400,700);
  background (0);

  strokeWeight (3);
  stroke (255);

  y=height/5;
}

function draw() {
  background (255, map (y,0,height,0,255),0);
  line (100,y,200,y);
  y+=v*dir;

  // if(y!=height-20){y++} vuol dire "Se (non tocchi height) {ti muovi}" funziona, ma non si può usare in tutti i casi (?)
  if (y<=0 || y>=height) {
    dir=-dir;
  }
}

// && = and, || = or, ! = not

// map (what, start input, end input, start output, end output)