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
  line (width/2,0, width/2,height);
  line (0,height/2, width,height/2);

  //rettangolo
  fill (255,255,0); 
  rect (width/2, height/2, 100, 80, 20); // A rect(x,y,w,h), si può aggiungere un quinto paramentro per il border radius

  //punto fermo
  strokeWeight (10);
  stroke (0,0,255);
  point (width/2, height/2);

  //punto random
  stroke (255,0,0);
  point (x,y);

  //punto che si muove con il mouse
  stroke (255,50,255);
  point (mouseX, mouseY);
}