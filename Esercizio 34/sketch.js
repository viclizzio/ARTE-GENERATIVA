var x;
var y;
var v;
var d=50;
var r=255;
var g=255;
var b=0;
var st=0;

function setup(){
    createCanvas(500,500);
    x = d/2;
    y = d/2;
}

function draw(){
    background (0);

    fill (r,g,b);
    ellipse (x,y,d,d);

    if(st==0){
        x+=v;
        y+=sv;
        if(x>=width/2){
            st==1;
        }
    }

}
