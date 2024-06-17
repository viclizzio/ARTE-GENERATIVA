var s;
var q=6;
var count=0;

function setup(){
  createCanvas (500,500);

  s=width/q;

  background (255);

  noStroke();

  for (var y=0; y<=height; y+=s){
    for (var x=0; x<=width; x+=s){

      if (count%3 == 0){
        fill (255,20,0);
        triangle (x,y, x+s,y, x+s,y+s);
      }

      if (count%3 == 1){
        fill (255,150,0);
        ellipse (x+s/2, y+s/2, s,s);
      }

      if (count%3 == 2){
        fill (255,230,0);
        rect (x,y, s,s);
      }
    }
    count++;
  }
}
