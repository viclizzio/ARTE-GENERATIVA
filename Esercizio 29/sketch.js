var a=0;
var x=0;

function setup(){
    createCanvas(500,500);

    rectMode(CENTER);
}

function draw(){
    background (0);

    fill(255,100,100);
    rect(x+50, height/2-40, 140,45);

    push ();
    translate (x,height/2);
    rotate (radians(a));

    fill (255,255,0);
    rect (0,0,50,50,10);
    pop ();
   
    push ();
    translate (x+100,height/2);
    rotate (radians(2*a));
    fill (0,255,255);
    rect (0,0,50,50,10);

    a+=3;
    x+=5; 
    
    if(x>width){
        x=-120;
    }
}
