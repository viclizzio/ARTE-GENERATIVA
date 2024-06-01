var scrivendo="";
var scritto="";
var f;
var d=1;
var a=false;

function preload(){
    f=loadFont("./assets/testobello.ttf");
}

function setup(){
    createCanvas(500,500);
}

function draw(){
    background(0,50);

    textFont("Arial");
    textSize(30);
    fill(255);
    text("Inserisci il testo: " +scrivendo, 20, 40);

    if(a){
        textFont(f);
        textSize(d);
        text(scritto, width/2-textWidth(scritto)/2, height/2);
        d++;
        if(textWidth(scritto)>width-10){
            a=false;
        }
    }
}

function keyPressed(){
    if(keyCode==32 || keyCode>=48){
        scrivendo+=key;
    }

    if(keyCode==13){
        scritto=scrivendo;
        scrivendo="";
        a=true;
        d=1;
    }
    
    else if (keyCode==8){
        scrivendo=scrivendo.substring(0,scrivendo.lenght-1);
    }
}