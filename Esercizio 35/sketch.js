var x;
var y;
var v=3;
function setup(){
  createCanvas(400,400);
  x=width/2;
  y=height/2;
}

function draw(){
  background(0);
  ellipse(x,y,50,50);
}

function keyPressed(){
 if(keyIsPressed){
  if(key=="w" || key=="W"){
    y-=v;
  }
  if(key=="s"){
    y+=v;
  }
  if(key=="a"){
    x-=v;
  }
  if(key=='d'){
    x+=v;
  }
 }
}