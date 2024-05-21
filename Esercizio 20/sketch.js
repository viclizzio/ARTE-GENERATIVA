var q=20;
var d;
var r=0;
var g=0;
var b=0;
var v=3;
var dir=1; 
var bg=0;
var bott=true;

function setup() { 
  createCanvas (500, 500);
  d=width/q;
  noStroke();
  //colorMode(RGB, 255); 
}

function draw() {
  background(bg);
  bg+=v*dir

  if(bg<=0 || bg>=255){
    dir=-dir

  }
    
  for(var y=d/2; y<height; y+=d){ //ripetitore di riga
    for(var x=d/2; x<=width; x+=d){ //generatore di riga o riplecatore di riga
      r=map(x, d/2, width-d/2, 0, 255);
      g=map(y, d/2, width-d/2, 0, 255);

      if(dist(x, y, mouseX, mouseY)<d/2){
        b=255;
      }
      else{
        b=0;
      }

    fill(r, g, b);
    ellipse(x+random(-3, 3), y+random(-3, 3), d, d)
    } 
  }
}
 
function mousePressed(){ //funzione per quando bisogna utilizzare la funzione del click del mouse 
   
  if(mouseButton==LEFT){
    bott=!bott; 
   }
    
  if(bott){
    loop();
  }
   else{
    noLoop();
   }
}

/*function mouseReleased(){ 
    loop();
}*/
