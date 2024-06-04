var xc;
var yc;
var d=90;
var rc=255;
var bc=0;

var xr;
var yr;
var w=90;
var h=90;
var rr=255;

var v=2;
var st=0;

function setup(){
  createCanvas (500,500);

  xc=d/2;
  yc=height-d/2;

  xr=width;
  yr=height/2;
}

function draw(){ 
  background (0);

  fill (rc,0,bc);
  ellipse (xc,yc,d);

  fill (rr,255,0);
  rect (xr,yr,w,h);

  if (st==0){
    xc+=v;
    yc-=v;

    if (xc>=width/2)[
      st=1
    ]
  }

  if (st==1){
    yc-=v;

    if (yc<=d/2){
      st=2
    }
  }

  if (st==2){
    rc-=v;
    bc+=v;

    xr-=v;

    if (xr<=width/2-w/2){
      st=3
    }
  }

  if (st==3){
    yr+=v;

    if (yr>=height-h){
      st=4
    }
  }

  if (st==4) {
    rr-=v;
    w+=v;

    if (w>=width-w/2){
      st=5
    }
  }

  if (st==5) {
    fill (255);
    textSize (70);
    textAlign (CENTER,CENTER);
    text ("CIAO", 0,0,width,height);
  }
}
