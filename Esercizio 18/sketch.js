var q=15;
var s;

function setup(){
  createCanvas(500,500);
  s=width/q;
  
}

function draw() {
  background (0);

  for(i=0; i<q; i++){
    stroke(255,120,200);
    line(0,i*s, height-i*s,0);

    stroke(255,255,50);
    line(i*s,0, width,i*s);
    
    stroke(100,220,255);
    line(i*s,height, width,height-i*s);

    stroke(90,200,100);
    line(0,i*s, i*s,width); 
  }
}
