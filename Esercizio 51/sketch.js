var s;
var q=20;

var r=255;
var g=255;
var b=255;

function setup(){
  createCanvas (500,500);

  s=width/q
}

function draw(){ 
  background (255);

  for (var y=0; y<=height; y+=s){
    
    for (var x=0; x<=width; x+=s){
      fill (r,g,b);

      line (x+s/2,y+s/2, width/2,height/2);
      ellipse (x+s/2,y+s/2, s/2,s/2);

      if (x<=width/2-s/2 && y<=height/2){
        r=255;
        g=0;
        b=0;
      }

      if (x<=width/2-s/2 && y>=height/2){
        r=0;
        g=255;
        b=0;
      }

      if (x>=width/2-s/2 && y>=height/2){
        r=0;
        g=0;
        b=255;
      }
      if (x>=width/2-s/2 && y<=height/2){
        r=255;
        g=255;
        b=0;
      }
    }
  }
}