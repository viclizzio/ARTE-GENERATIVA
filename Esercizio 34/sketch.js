var x;
var y;
var d=50;
var r=255;
var g=255;
var b=0;
var st=0;
var v=5;

function setup(){
  createCanvas(500,500);

  x=d/2;
  y=d/2;
}

function draw(){
  background(255);

  fill(r,g,b);
  ellipse(x,y,d,d);

  if(st==0){
    x+=v;
    y+=v;

    if(x>=width/2){
      st++;
    }
  }

  if(st==1){
    d++;

    if(d>100){
      st++;
    }
  }

  if(st==2){
    r--;
    g--;
    b++;

    if(b>255){
      st++;
    }
  }
  
  if(st==3){
    y+=v;
    
    if(y>=height-d/2){
      v=0;
    }
  }
}