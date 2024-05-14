var d=50; //permette di modificare la dimensione in tutti gli elementi (es. class)

function setup() {
  createCanvas(300, 300); // Crea la tela
  background (255, 255, 0); // Colore della tela

  stroke (255,0,0); // Colore del bordo
  line (0,0,width,height);
  line (width,0,0,height);

  stroke (0,0,255);
  strokeWeight (3); // Spessore del bordo
  fill (0,255,0); // Riempimento colore  (i colori possono essere in valore decimale, RGB, RGBA, esadecimale, CSS)
  // La posizione del cerchio è data dalla posizione del suo centro: circle (asse x,asse y,dimensione)
  circle (width/2,height/2,d); // Permette che il cerchio resti al centro qualsiasi sia la dimensione della Canvas (modalità parametrica)
  
  noStroke (); // Permette di elimintare il bordo
  fill (200,50,0, 200); // Il quarto valore indica l'opacità
  circle (width/2,height/2+30, d);

  console.log ("Il diametro è "+d); // Messaggi per capire cosa sta succedendo
  console.log ("Sono nel setup"); // Il setup viene utilizzato per funzioni che vengono ripetute una sola volta
  frameRate(1); // Velocità dei frame
}

function draw() {
  console.log ("Sono nel draw e sono passati "+frameCount+" fotogrammi"); // Il draw viene usato per le animazioni
}

// I ; si mettono solo per le istruzioni atomiche, ovvero in linea
