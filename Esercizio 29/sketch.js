var a=0;

function setup(){
    createCanvas(500,500);

}

function draw(){
    background (0);

    translate (100,100);
    rotate (radians(a));

    fill (255,255,0);
    rect (0,0,50,50);
   
    fill (0,255,255);
    rect (100,0,50,50);
    a+=3;
}
