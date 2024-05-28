var i;
var i2;
var p;

function preload(){
    i=loadImage("./assets/gigi.png");
    i2=loadImage("./assets/gigi.png");
}

function setup(){
    createCanvas(500,500);

    i.resize(i.width/2, i.height/2);
    i2.resize(i2.width/2, i2.height/2);

    i.filter(GRAY);
    i.filter(BLUR, 5);
}

function draw(){
    background(0) // per muoverlo con il mouse (i.get(mouseX, mouseY)); //togliere background per gigi infiniti
    image (i,0,0); // per muoverlo con il mouse (i, mouseX, mouseY);
    p=i2.get(mouseX, mouseY, 150, 150);
    image (p, mouseX, mouseY);
}
