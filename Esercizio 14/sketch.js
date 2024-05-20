var x=10;
var y=250;
var r=0;
var g=0;

function setup(){
  createCanvas (500,500);
}

function draw() {
  background (r,g,255);
  fill (255-r, 255-g, 0);
  beginShape();
    vertex (x,y);
    vertex (x+35,y-130);
    vertex (x+60,y-90);
    vertex (x+335,y-245);
    vertex (x+390,y-160);
    vertex (x+110,y-5);
    vertex (x+130,y+40);
  endShape (CLOSE);

  x=mouseX;
  y=mouseY;

  r=map(mouseX, 0, width, 0, 255);
  g=map(mouseY, 0, height, 0, 255);
}
