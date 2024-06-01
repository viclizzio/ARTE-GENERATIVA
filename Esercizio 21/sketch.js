var x;
var y;
var w=60;
var h=30;
var b=0;
var c;
var cs;

function setup() { 
  createCanvas (500,500);

  x=random(width-60);
  y=random(height-30);

  c=color(random(255),random(255),random(255));

  cs=color(red(c)+50,green(c)+50,blue(c)+50);
}

function draw() {
  background (b);

  if (mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
      stroke(255);
      fill(cs);
    }

  else {
    noStroke();
    fill(c);
  }

  fill(c);
  rect(x,y,w,h);
}

function mousePressed(){
  if(mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
    if (mouseButton==LEFT){
      b=255;
    }
    
    else if(mouseButton==RIGHT){
      b=0;
    }
  }
}