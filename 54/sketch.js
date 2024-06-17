var x=0;
var x1=0;

var v=3;
var dir=1;
var st=0;

function setup(){
  createCanvas (500,500);  
}

function draw(){
  background (255);

  fill (0,255,0);
  triangle (0,0, x1,height, x,0);
  triangle (width,0, width-x1,height, width-x,0);

  if (st==0){
    x+=v*dir;

    if (x>=width/2){
      st=1;
    }
  }

  if (st==1){
    x-=v*dir;

    if (x<=0){
      st=2;
    }
  }

  if (st==2){
    x1+=v*dir;

    if (x1>=width/2){
      st=3;
    }
  }

  if (st==3){
    x1-=v*dir;

    if (x1<=0){
      st=0;
    }
  }
}
