var x=[];
var y=[];
var v=3;
var d=50;
var q=0;
var a=false;

function setup(){
  createCanvas (500,500);
}

function draw(){ 
  background (255,200,230);

  stroke (255,50,140);
  strokeWeight (2);
  fill (255,120,170);
  

  for (var i=0; i<q; i++){
    ellipse (x[i],y[i],d);

    if (a && y[i]<height-d/2){
      y[i]+=v;
    }
  }
}

function mousePressed(){
  x[q]=mouseX;
  y[q]=mouseY;
  q++;
}

function keyPressed(){
  if (key=='a'){
    a=true;
  }

  if (key=='s'){
    a=!a
  }
}
