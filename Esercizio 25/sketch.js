var t="ABACATANIA";

function setup() { 
  createCanvas (500,500);
}

function draw() {
  background (0);

  strokeWeight (2);
  stroke (0,0,255);
  line (width/2, 0, width/2, height);
  line (0, height/2, width, height/2);
  
  fill (255);
  textSize (50);
  stroke (255,0,0);
  strokeWeight (3);
  text (t, width/2-textWidth(t)/2, height/2);
}