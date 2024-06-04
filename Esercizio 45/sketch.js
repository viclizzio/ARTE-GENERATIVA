var st=0;

var x;
var y;
var d=50;

var r=0;
var g=255;
var b=255;

var v=3;

var q=20;
var s;

function setup(){
  createCanvas (500,500);

  x=width-d/2;
  y=0+d/2;

  s=width/q;
}

function draw(){ 
  background (0);

  fill (r,g,b);
  ellipse (x,y, d);

  if (st==0){
    y+=v

    if (y>=height/2){
      st=1
    }
  }

  if (st==1){
    x-=v

    if (x<=width/2){
      st=2
    }
  }

  if (st==2){
    y-=v

    if(y<=0+d/2){
      st=3;
    }
  }

  if (st==3){
    r+=v;
    g-=v;
    b-=v;

    if (r==255){
      st=0;
      r=0;
      b=255;
      g=255;
      x=width-d/2;
      y=0+d/2;
    }
  }

  if (st==2 || st==3){
    for (var i=0; i<q; i++){
      stroke (r,g,b);
      line (x,y, i*s,height)
    }
  }
}
