var s;
var q=6;
var count=0;

function setup(){
  createCanvas (500,500);  

  s=width/q
}

function draw(){

  if (frameCount%120==60){
    for (var y=0; y<=height; y+=s){
      for (var x=0; x<=width; x+=s){
        strokeWeight (0.6);

        if (count%2==0){
          
          fill (255);
          rect (x,y, s,s);

          fill (255,0,0);
          ellipse (x+s/2,y+s/2, s,s);

          fill (100);
          triangle (x,y+s, x+s/2,y+s/2, x+s,y+s);

          fill (255);
          triangle (x+s/4,y+s-s/4, x+s/2,y+s/2, x+s/2+s/4,y+s-s/4);
        }
        
        if (count%2==1){
          fill (255);
          rect (x,y, s,s);

          fill (255,0,0);
          ellipse (x+s/2,y+s/3, s/2,s/2);

          noStroke(0);
          fill (0,220,255,100);
          ellipse (x+s/2,y+s+s/5, s,s);

          stroke (0);
          strokeWeight (5);
          line (x+s/4,y+s/2, x+s/4,y+s);
          line (x+s/2+s/4,y+s/2, x+s/2+s/4,y+s);
          line (x+s/4,y+s/2+s/8, x+s/2+s/4,y+s/2+s/8);

          noFill();
          arc (x+s/2,y+s/3, s/2+s/3,s/3, 0,PI);
        }
        count++
      }
    }
  }

  if (frameCount%120==0){
    for (var y=0; y<=height; y+=s){
      for (var x=0; x<=width; x+=s){

        if (count%2==0){
          fill (100,200,255);
          rect (x,y, s,s);
        }
          
        if (count%2==1){
          fill (255);
           rect (x,y, s,s);
        }
        count++
      }
    }
  }
}