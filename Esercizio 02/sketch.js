var d = 50;
var x = d/2;
var v = 1;

function setup() {
  createCanvas (300, 300);
  
  noStroke ();
}

function draw() {
  background (0,50);

  circle (x, height/2, d);

  x+=v // Permette alla palla di muoversi in orizzontale

  if (x == width-d/2){  // Se (x è uguale a destra) {si ferma}
    v=0
  }
}
