var colori=["#dfa0bf","#f9cb9c","#ffe599","#b6d7a8","#9fc5e8"];
var q=10;
var s;
var m;

function setup(){
    ellipseMode (RADIUS);

    createCanvas(500,500);

    noStroke();

    s=width/q;

    damiano();
}
function draw(){ 
  if (keyIsPressed){
    if (key=='r'){
      background(255); 
      damiano();
    }
  } 
}

function damiano(){
  for (var y=0;y<height;y+=s){
    for (var x=0;x<width;x+=s){
      fill (random(colori));

      m=random(100);

      if (m<25){
       arc (x+s,y+s,s,s,radians(180),radians(270));
      }

      else if (m<50){
       arc (x,y+s,s,s,radians(270),radians(360));
      }
      
      else if (m<75){
        arc (x,y,s,s,0,radians(90));
      }
      
      else {
        arc (x+s,y,s,s,radians(90),radians(180));
      }
    }
  }
}