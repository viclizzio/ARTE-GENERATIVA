var x=[];
var y=[];
var v=[];
var c=[];
var dir=[];
var t=[];

var q=100;

function setup() { 
  createCanvas (600,400);

  for(var i=0;i<q;i++){
    x[i]=random(60,width-60);
    y[i]=random(height-20);
    c[i]=color(random(255),random(255),random(255),100);
    v[i]=random(1,10);
    dir[i]=random([-1,1]);
  }

  noStroke();
}

function draw() {
  background (0);

  for(var i=0;i<q;i++){
    fill (c[i]);

    if(dir[i]==1){
      triangle(x[i],y[i],x[i]+20,y[i]+10,x[i],y[i]+20);

      ellipse(x[i]+40,y[i]+10,40,20);

      if(x[i]>width){
        x[i]+=-width-60;
      }

      if(mouseX>x[i] && mouseX<x[i]+60 && mouseY>y[i] && mouseY<y[i]+20){
        v[i]=0;
        t[i]=frameCount;
      }
    }

    else{
      triangle(x[i],y[i],x[i]-20,y[i]+10,x[i],y[i]+20);
      
      ellipse(x[i]-40, y[i]+10,40,20);

      if(x[i]<0){
        x[i]=width+60;
      }

      if(mouseX>x[i]-60 && mouseX<x[i] && mouseY>y[i] && mouseY<y[i]+20) {
        v[i]=0;
        t[i]=frameCount;
      }
    }

    x[i]+=v[i]*dir[i];
  }
}