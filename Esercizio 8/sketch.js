var x;
var y;

function setup() {
  createCanvas(400,400);
  rectMode (CENTER);
  x=random (width); // Permette di avere un punto fermo che cambia posizione random solo quando viene aggiornata la pagina
  y=random (height);
}

function draw() {
  background (0);

  //linee
  stroke (255);
  strokeWeight (1);
  line (width/2, 0, width/2, height);
  line (0, height/2, width, height/2);

  //rettangolo
  fill (0,255,0); 
  rect (width/2, height/2, 100, 100, 20); // A rect (x,y,w,h), si può aggiungere un quinto paramentro per il border radius, fino ad otto se si vogliono modificare singolarmente.

  //cerchio
  fill (255,100,100);
  ellipse (width/2, height/2, 50, 50);

  //punto fermo
  strokeWeight (10);
  stroke (0,0,255);
  point (width/2, height/2);

  //punto che si muove
  stroke (255,255,0);
  point (x,y);

  //punto che si muove con il mouse
  strokeWeight (10);
  stroke (255,50,255);
  point (mouseX, mouseY);
  

}

/* FUNZIONI DI MODALITA'

  ellipseMode (funzione);
  center: xc,yc,d,d;
  corner: xa,ya,d,d;
  corners: xa,ya,xb,yb;
  radius: 

  Esiste anche rectMode per i rettangoli.
*/