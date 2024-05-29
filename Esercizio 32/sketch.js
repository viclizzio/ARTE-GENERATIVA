var x;
var v=5;
var dir=-1;
var c=255;

function setup(){
    createCanvas(600,400);
    rectMode (CORNERS);

    x=width/2;
}

function draw(){
    background (0);

    fill (c);
    rect (0,0,x,height);
    rect (width-x,0,width,height);
    
    x+=v*dir;
    if (x<0 || x>width/2){
      dir=-dir;  
    }

    if (x>width/2){
        c=color (random(255), random(255), random(255));
    }
    

}
