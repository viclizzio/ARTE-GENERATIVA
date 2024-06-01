var x;
var a=30;
var d=100; 
var v=5;
var dir=-1;
var c;

function setup() { 
    createCanvas (600,400);

    x=width/2;
}

function draw() {
    background(0);

    fill (255,255,0);
    arc (x,height/2, d,d, radians(a),radians(360-a));

    fill (0);
    ellipse (x,height/2-20, 10,10);
    
    x+=v

    if (x>=width+d/2){
        x=-d/2;
    }

    a+=v*dir;

    if (a>=30 || a<=0){
        dir=-dir
    }
}
