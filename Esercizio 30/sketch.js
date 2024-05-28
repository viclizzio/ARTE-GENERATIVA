var a=0;

function setup(){
    createCanvas(500,500);

    rectMode(CENTER);
}

function draw(){
    background (0);

    push ();
    translate (100,100);
    rotate (radians(a));

    fill (255,255,0);
    rect (0,0,50,50,10);
    pop ();
   
    push ();
    translate (200,100);
    rotate (radians(2*a));
    fill (0,255,255);
    rect (0,0,50,50,10);
    a+=3;
}
