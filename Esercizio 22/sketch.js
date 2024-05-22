var p=["#011638","#2e294e","#9055a2","#d499b9", "#e8c1c5"]


function setup() { 
  createCanvas (500,500);
}

function draw() {
  background(random(p));
  for(var i=0;i<10;i++){
    rect(random(width),random(height),60,20)
  }
}