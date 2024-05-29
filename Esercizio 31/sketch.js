var i=0;

function setup(){
    createCanvas(500,500);
}

function draw(){
    //background (0);
    
    ellipse (width/2+cos(i)*100, height/2+sin(2)*100+i*5, 10, 10);
    i+=0.1;
}
