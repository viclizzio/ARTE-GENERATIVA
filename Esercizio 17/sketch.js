var d=50;

function setup(){
  createCanvas(500,500);
  background (0);
  for(var i=0;i<100; i++){
    ellipse(random(d/2, width-d/2), random(d/2, height-d/2),d,d);
  }
}

function draw() {
  
}
