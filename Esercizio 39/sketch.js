var colori=["#dfa0bf","#f9cb9c","#ffe599","#b6d7a8","#9fc5e8"];
var q=50;
var c1;
var c2;
var x=0;
var v=3;
var dir=1;

function setup(){
  createCanvas(500,500);

  noStroke();

  s=width/q;

  c1=random(colori);
  c2=random(colori);
  
}

function draw(){ 
    background(0);

    for (var i=0; i<width;i+=s){
      stroke (c1);
      line (i,0,x,height/2);
      
      stroke (c2);
      line (i,height,width-x,height/2);
    }

    x+=v*dir;

    if (x<0 || x>width){
      dir=-dir;

      c1=random (colori);
      c2=random (colori);
    }
}