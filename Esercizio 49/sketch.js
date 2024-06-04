var x;
var y;
var d=50;

var s;
var q=10;

var cont=0;

function setup(){
  createCanvas (500,500);

  s=width/q;

  noFill();
  strokeWeight (2);

  frameRate (2);
}

function draw(){ 
  background (0);

  //cont=0;
  
  for(var y=0; y<height+s; y+=s){
    
    for(var x=0; x<width+s; x+=s){
      
      if (cont%2==0){
        stroke (255,90,170);
      }

      else {
        stroke (255,230,0);
      }

      ellipse (x,y,d+10)

      cont++
    }
  }
}

