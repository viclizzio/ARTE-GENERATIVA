var scrivendo="";
var scritto="";
var f;

function setup() { 
  createCanvas (500,500);
}

function draw() {
  background (0);

  fill (255);
  textSize (30);
  text ("Inserisci il testo: "+scrivendo, 20, 40);
}

function keyPressed(){
  if(keyCode==32 || keyCode>=48){
    scrivendo+=key;
  }
}