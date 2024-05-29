var a=0;

function setup(){
    createCanvas(500,500);

    rectMode(CENTER);
}

function draw(){
    background (0);
    
    fill (255,255,0);
    translate (width/2, height/2);
    rotate (radians(a));
    rect (0,0,80,80);
    
    fill (0,255,255);
    translate (150,0);
    rotate (radians(2*a));
    rect (0,0,50,50);

    fill (200);
    translate (80,0);
    rotate (radians(-4*a));
    rect (0,0,20,20);

    a+=2;
}
