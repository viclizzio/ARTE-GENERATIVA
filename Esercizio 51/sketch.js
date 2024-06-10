var s;
var q=25;
var d=15;

function setup(){
  createCanvas (700,500);

  s=width/q
}

function draw(){ 
  background (0);

  for (var y=0; y<=height; y+=s){
    
    for (var x=0; x<=width; x+=s){
      ellipse (x+s/2,y+s/2,d,d);
    }
  }
}