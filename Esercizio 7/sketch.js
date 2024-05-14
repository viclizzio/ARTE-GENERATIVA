function setup() {
  createCanvas(600,600);
}

function draw() {
  strokeWeight(random(1,25));
  stroke (random(255),random(255),random(255), 50);
  line (random(width),random(height),random(width),random(height));
}
