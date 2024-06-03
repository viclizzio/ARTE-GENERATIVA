var q=100;
var x=[];
var y=[];
var vx=[];
var vy=[];
var a=false; //animazione

function setup(){
  createCanvas (500,500);

  for (var i=0; i<q; i++) {
    vx[i]=random(-5,5);
    vy[i]=random(-5,5);
  }
}

function draw(){ 
  background (0);

  stroke (0,255,0);
  strokeWeight (2);

  line (mouseX,0, mouseX,height);
  line (0,mouseY, width,mouseY);

  fill (0);
  ellipse (mouseX,mouseY, 50); 
  
  if (a){
    for (var i=0; i<q; i++) {
    rect (x[i],y[i],5,5);
    x[i]+=vx[i];
    y[i]+=vy[i];
    }
  }
}

function mousePressed (){
  for (var i=0; i<q; i++) {
    x[i]=mouseX;
    y[i]=mouseY;
  }
  a=true;
}