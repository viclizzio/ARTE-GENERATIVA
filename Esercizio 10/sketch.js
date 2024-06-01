var s=0; // border radius
var l=100; // lato

function setup() {
  createCanvas(400,400);

  rectMode (CENTER);

  noStroke();
}

function draw() {
  background (255);

  rect (width/2, height/2, l, l, s);

  fill (map(mouseY, 0,height, 0,255), 0, 255); // Colore che cambia quando si sposta il mouse in verticale
  
  s= map(mouseX, 0,width, 1,l/2); // Fa si che al passaggio del mouse il quarato diventi un cerchio
}
