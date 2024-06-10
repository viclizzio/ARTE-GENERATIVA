var s;
var q=10;

function setup(){
  createCanvas (500,500);

  s=width/q
}

function draw(){ 
  background (255,255,0);

  for (var y=0; y<=height; y+=s){
    
    for (var x=0; x<=width; x+=s){
      // rect (x,y,s,s);
       ellipse (x+s/2,y+s/2,s,s);
    }
  }
}