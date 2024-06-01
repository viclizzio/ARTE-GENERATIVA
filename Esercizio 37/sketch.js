function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);

  for (var y=20; y<height-10;y+=20){
    for (var x=20; x<width-10;x+=20){
      if (x<width/2 && y<height/2){
        stroke(255,0,0);
      }

      else if (x>width/2 && y<height/2){
        stroke(255,255,0);
      }

      else if (x<width/2 && y>height/2){
        stroke(0,255,0);
      }

      else{
        stroke(0,0,255);
      }
      
      ellipse(x,y,10,10);
      line(x,y,width/2,height/2);
    }
  }
}