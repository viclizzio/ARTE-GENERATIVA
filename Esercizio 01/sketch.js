var d = 50; // Permette di modificare la dimensione "a prova di capo"

function setup() {
  createCanvas (300, 300); // Crea la tela
  background (255,255,0); // Colore della tela

  //linee
  stroke (255,0,0); // Colore del bordo
  line (0,0, width,height); // Linea
  line (width,0, 0,height); // Linea

  //cerchio al centro
  stroke (0,0,255); // Colore del bordo
  strokeWeight (3); // Spessore del bordo
  fill (0,255,0); // Riempimento colore
  circle (width/2, height/2, d); // circle (x, y, d)
  // Il cerchio resta al centro qualsiasi sia la dimensione della Canvas (modalità parametrica)
  
  //cerchio in basso
  noStroke (); // Elimina il bordo
  fill (200,50,0, 200); // Il quarto valore indica l'opacità
  circle (width/2, height/2+100, d);

  //console
  console.log ("Il diametro è "+d); // Messaggi per capire cosa sta succedendo
  console.log ("Sono nel setup"); // Il setup viene utilizzato per funzioni che vengono ripetute una sola volta
  
  frameRate (1); // Velocità dei frame
}

function draw() {
  console.log ("Sono nel draw e sono passati "+frameCount+" fotogrammi"); // Il draw viene usato per le animazioni
}

// Il ; si mette solo per le istruzioni atomiche, ovvero in linea
