var d=50;
var x=d/2;
var v=1;

function setup() {
  createCanvas(300, 300);
  noStroke ();
}

function draw() {
  background (0,0,0,50);
  circle (x,height/2,d);
  x=x+v; // Versione contratta: x+=v, solamente per x=x+1 possiamo scrivere anche x++.
  if (x==width-d/2){ 
  v=0 } // Se (il cerchio sta a destra)
}
