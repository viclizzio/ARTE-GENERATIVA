var s=0;
var l=100;

function setup() {
  createCanvas(400,400);
  rectMode (CENTER);
}

function draw() {
  background (0);

  fill (map(mouseY,0,height,0, 255),255,0); // Colore che cambia quando si sposta il mouse
  s=map (mouseX,0,width, 0,l/2); // Fa si che al passaggio del mouse il quarato diventi un cerchio
  rect (width/2, height/2, l, l, s);
}
