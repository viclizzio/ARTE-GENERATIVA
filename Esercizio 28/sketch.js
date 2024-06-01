var i;
var i2;
var p;
var c;

function preload(){
    i=loadImage("./assets/gigi.png");
    i2=loadImage("./assets/gigi.png");
}

function setup(){
    createCanvas(500,500);

    i.resize(i.width/2, i.height/2);
    i2.resize(i2.width/2, i2.height/2);

    i.filter(BLUR, 5);
}

function draw(){
    c=get(mouseX-1, mouseY-1);

    background(0) // per muoverlo con il mouse (i.get(mouseX, mouseY)); //togliere background per gigi infiniti
    
    image (i,0,0); // per muoverlo con il mouse (i, mouseX, mouseY);
    p=i2.get(mouseX, mouseY, 150, 150);
    image (p, mouseX, mouseY);

    fill (255);
    textSize(40);
    text("R: "+red(c)+" - G: "+green(c)+" - B: "+blue(c),30,height-30);
}
