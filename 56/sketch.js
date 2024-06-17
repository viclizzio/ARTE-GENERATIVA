var st=0;
var v=3;

var x;
var y;
var d=50;

var r=255;
var g=0;
var b=0;

function setup(){
  createCanvas (500,500);  

  x=d/2;
  y=height-d/2;
}

function draw(){
  background (0);

  fill (r,g,b);
  ellipse (x,y,d);

  if (st==0){
    x+=v
    y-=v
    
    if (x>=width-d/2){
      st=1
    }
  }

  if (st==1){
    g+=v
    r-=v

    if (g>=255){
      st=2
    }
  }

  if (st==2){
    y+=v

    if (y>=height/2){
      st=3
    }
  }

  if (st==3){
    b+=v
    g-=v

    if (b>=255){
      st=4
    }
  }

  if (st==4){
    x-=v

    if (x<=width/2){
      st=5
    }
  }

  if (st==5){
    g+=v
    r+=v

    if (r>=255){
      st=6
    }
  }

  if (st==6){
    d+=v

    if (d>=width){
      st=0

      x=0+25;
      y=height-25;
      d=50;

      r=255;
      g=0;
      b=0;
    }
  }
}