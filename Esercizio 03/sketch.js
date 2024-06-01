var y;
var v=5;
var dir=1 

function setup() {
  createCanvas (400,800);
  background (0);

  strokeWeight (3);
  stroke (255);

  y=height/2;
}

function draw() {
  background ( 255, map(y, 0,height, 0,255), 0); // map (what, start-input, end-input, start-output, end-output)

  line (100,y, width-100,y);

  y+=v*dir; // Permette alla linea di muoversi in verticale

  if (y<=0 || y>=height) { // Se (la inea sbatte in basso o in alto) {torna indietro}
    dir=-dir;
  } 
}

// &&=and, ||=or, !=not

