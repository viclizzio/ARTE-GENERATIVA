var x;
var y;
var d=50;

function setup() {
  createCanvas(400,400);

  noStroke();
}

function draw() {
  fill (random(255),random(255), random(255), 50);

  x=random(0,400);
  y=random(0,400);

  ellipse(x,y,d,d);
}
