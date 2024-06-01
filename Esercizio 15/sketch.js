var a=0;

function setup(){
  createCanvas (499,400);
}

function draw() {
  background (0);

  stroke (255,130,210);
  strokeWeight(4);

  arc (width/2,height/2, 150,150, HALF_PI, radians(a), PIE); // CHORD

  a++;

  fill (a% 255, 50, 100);

  /*
  TWO_PI
  PI
  HALF-PI
  QUARTER-PI
  */
}
