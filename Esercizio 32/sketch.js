var x;
var v=5;
var dir=-1;
var c=255;
var cont=0;
var imm;

function preload(){
   imm=loadImage("./files/sailor.png");
}

function setup(){
   createCanvas (600,400);

   rectMode (CORNERS);

   x=width/2;

   noStroke ();
}

function draw(){
   background (0);

   // figure
   if (x>width/2){
      cont++;
      c=color (random(255),random(255),random(255));
   }
   if (cont%4==0){
      ellipse (width/2,height/2, 60,60);
   }

   if (cont%4==1){
      rect (width/2-30,height/2-30, width/2+30,height/2+30)
   }

   if (cont%4==2){
      triangle (width/2,height/2-30, width/2-30,height/2+30, width/2+30,height/2+30);
   }

   if (cont%4==3){
      image (imm, 0,0,width,height);
   }

   // porte
   fill (c);
   rect (0,0, x,height);
   rect (width-x,0, width,height);
   
   x+=v*dir;
   
   if (x<0 || x>width/2){
      dir=-dir;
   } 
}