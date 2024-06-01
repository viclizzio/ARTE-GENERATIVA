var x;
var y;
var d=50;
var st=0;
var v=5;

function setup(){
    createCanvas (400,400);
    
    x=d/2;
    y=d/2;
}

function draw(){
    background (map(x,0,width,0,255), map(y,0,width,0,255), map(x,0,width,0,255));

    ellipse (x,y,d);

    if (st==0){
        x+=v;

        if(x>width-d/2){
            st=1;
        }
    }

    if (st==1){
        y+=v;

        if (y>height-d/2){
            st=2;
        }
    }

    if (st==2){
        x-=v;

        if (x<d/2){
            st=3;
        }
    }

    if (st==3){
        y-=v;
        
        if (y<d/2){
            st=0;
        }
    }
}
