var l=80;

var y1=0;
var y2=0;

var v1;
var v1;

var s1=0; //smussamento
var s2=l/2;

var dir1=1;
var dir2=1;


function setup(){
  createCanvas (400,600);

  v1=random(2,10);
  v2=random(2,10);
}

function draw(){ 
  background (255,150,150);

  fill (map(y1, 0,height-l, 0,255));
  rect (0,y1, l,l, s1);
  s1= map(y1, 0,height, 1,l/2);

  fill (map(y2, 0,height-l, 255,0));
  rect (width-l,y2, l,l, s2);
  s2= map(y2, 0,height, l/2,0);

  y1+=v1*dir1;
  y2+=v2*dir2;

  if (y1<=0 || y1>=height-l){
    dir1=-dir1;
  }

  if (y2<=0 || y2>=height-l){
    dir2=-dir2;
  }
}