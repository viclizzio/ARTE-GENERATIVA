var x;
var y;
var d=120;

var v=2;

var b=255;
var sf=true;

var st=0;

function setup(){
  createCanvas (500,500);

  noStroke ();

  x=d/2;
  y=height-d/2;

  rectMode (CENTER);
}

function draw(){ 
  if (sf){
    background (255);
  }
  else {
    background (0);
  }

  fill (0,255,b);
   

  if (st==0){
    y-=v;

    if (y<=height/2){
      st=1;
    }
  }

  if (st==1){
    x+=v

    if (x>=width/2){
      st=2;
    }
  }

  if (st==2){
    d-=v;
    
    if (d<=60){
      st=3;
    }
  }

  if (st==3){
    y-=v;
    x+=v;

    if (x>=height-d/2){
      st=4;
    }
  }

  if (st==4){
    b-=v;

    if (b<=0){
      st=0;
      b=255;
      d=80;
      x=d/2;
      y=height-d/2;
    }
  }

  if (dist (mouseX,mouseY, x,y)<d/2) {
    rect (x,y,d)
  }
  else {
    ellipse (x,y,d);
  }
}

function keyPressed (){
  if (key==' '){
    sf=!sf;
  }
}






