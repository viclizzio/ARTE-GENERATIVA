var x;
var a=30;
var d=100; 
var v=5;
var va=5;
var dira=-1;
var c;
function setup() { 
    createCanvas (600, 400);
    x=width/2;
    c=(random(255));
}

function draw() {
    background(c);
    fill(255, 255, 0);
    arc(x, height/2, d, d, radians(a), radians(360-a));
    c=color(random(255), random(255), random(255), 20);
    fill(0);
    ellipse(x, height/2-20, 10, 10);
    x+=v
    if(x>width+d/2){
        x=-d/2;

    }
    a+=va*dira;
    if(a>=30 || a<=0){
        dira=-dira

    }
}
