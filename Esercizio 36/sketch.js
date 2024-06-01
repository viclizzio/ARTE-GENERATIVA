var x;
var y;
var v=3;
var a=255;

function setup(){
  createCanvas (500,500);

  x=width/2;
  y=height/2;

  noStroke ();

}
function draw(){
  background (0,a);

  ellipse (x,y,50,50);

  if (keyIsDown(17)){
    v=6; 
    a=50;
  }

  else{
    v=3;
    a=255;
  }

  if(keyIsDown(37)){
    x-=v;
  }

  if(keyIsDown(38)){
    y-=v;
  }

  if(keyIsDown(39)){
    x+=v;
  }

  if(keyIsDown(40)){
  y+=v;
  }
}