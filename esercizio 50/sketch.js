var s;
var q=20;

function setup(){
  createCanvas (500,500);

  s=width/q
}

function draw(){ 
  background (0);

  //sopra
  for (var x=0; x<=width; x+=s){
    stroke (255,0,0);
    line (width/2,0, x,height);
  }

  //sotto
  for (var x=0; x<=width; x+=s){
    stroke (255,255,0);
    line (x,0, width/2,height);
  }

  //destra
  for (var y=0; y<=height; y+=s){
    stroke (0,255,0);
    line (0,y, width,height/2);
  }

  //sinistra
  for (var y=0; y<=height; y+=s){
    stroke (0,0,255);
    line (0,height/2, width,y);
  }
}