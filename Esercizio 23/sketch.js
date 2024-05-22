var p=["#bf1a2f78","#f0069978","#454e9e78","#018e4278","#f7d00278"]
var q=500;
var w=20;
var h=60;
var x=[];
var y=[];
var v=[];
var c=[];
var ve=0;

function setup() { 
  createCanvas (500,500);

  for(var i=0;i<q;i++){
    x[i]=random(-100,width-w);
    y[i]=random(-200,height-h);
    c[i]=random(p);
    v[i]=random(1,10);
  }

  noStroke();
}

function draw() {
  background (0);

  ve=map(mouseX, 0, width, 0,8);

  for(var i=0;i<q;i++){
    fill (c[i]);
    rect (x[i], y[i], w, h);
    y[i]+=v[i];
    x[i]+=ve;

    if(y[i]>height){
      y[i]=random(-200,-h);
    }

    if(x[i]>height){
      x[i]=random(-100,-h);
    }
  }
}