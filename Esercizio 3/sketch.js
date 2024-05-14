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
  y+=v*dir; // Permette alla linea di scendere in verticale

  if (y<=0 || y>=height) {dir=-dir;} // Permette alla linea di sbattere in basso e poi in alto
}

// &&=and, ||=or, !=not

// map (what, start input, end input, start output, end output)