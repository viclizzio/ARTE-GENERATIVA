var s;
var q=5;
var count=0;

function setup(){
  createCanvas (500,500);

  s=width/q;

  background (255);
  
  stroke (255,100,150);

  rect (0,0, width,height);

  for (var x=0; x<=width; x+=s){
    for (var y=0; y<=height; y+=s){
      
      line (x,y, x+s,y+s);
      line (x+s,y, x,y+s);
      
      fill (255,100,150);
      ellipse (x,y, s/2,s/6);
      ellipse (x+s/2,y+s/2, s/2,s/6);

      ellipse (x,y, s/6,s/2);
      ellipse (x+s/2,y+s/2, s/6,s/2);

      fill (255,255,140);
      ellipse (x,y, s/8,s/8);
      ellipse (x+s/2,y+s/2, s/8,s/8);
    }
  }
}
