var l=20;
var v=5;
var c;

function setup(){
  createCanvas(400,400);

  c=color(random(255),random(255),random(255))
}

function draw() {
  background (0);

  fill (c);

  rect (0,0,l);

  l+=v;

  if(l>=width){ //Se (il lato arriva a width) {cambia colore random e il lato ritona 20}
    c=color(random(255),random(255),random(255));
    l=20;
  }
}
