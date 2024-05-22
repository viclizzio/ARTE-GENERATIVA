
function setup() { 
  createCanvas (500,500);
  
}

function draw() {
  background (0);
  for(var i=0;i<10;i++){
    rect(random(width),random(height),60,20)
  }

}