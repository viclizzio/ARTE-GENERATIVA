var x=0;
var y=0;
var yg=0;
var xr=0;
var l=70;

var dir=1;
var v=5;

var r=255;
var g=255;
var b=255;
var col=true;

function setup(){
  createCanvas (500,500);

  noStroke ();
}

function draw(){ 
  background (255);
  
  fill (0,0,b);
  rect (x,y, l,);

  fill (0,g,0);
  rect (width/2-l/2,yg, l);

  fill (r,0,0);
  rect (xr,height/2-l/2, l);

  x+=v*dir;
  y+=v*dir;
  yg+=v*dir;
  xr+=v*dir;

  if (yg<=0 || yg>=height-l){ // Se (yg arriva a 0 o se yg arriva ib basso)
    dir=-dir;
    col=!col;
  }

  if (col){
    r=g=b=255;
  }

  else {
    r=g=b=0;
  }
}
