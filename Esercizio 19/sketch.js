var q=15;
var s;

function setup(){
  createCanvas (500,500);

  s=width/q; 
}

function draw() {
  background (0);

  for (i=s; i<width; i+=s){
    stroke (255);
    line (i,0, i,height);

    stroke (255,120,0);
    line (0,height/2, height,i);
  }
}
