var cat1 , cat2 , cat3 , cat4 ;
var mouse1 , mouse2 , mouse3 , mouse4 ;
var garden;
function preload() {
 cat1=loadImage("images/cat1.png");
 cat2=loadImage("images/cat2.png","images/cat3.png");
 cat3=loadImage("images/cat4.png");
 garden=loadImage("images/garden.png");
 mouse1=loadImage("images/mouse1.png");
 mouse2=loadImage("images/mouse2.png","images/mouse3.png");
 mouse3=loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
   tom=createSprite(870,600);
   tom.addAnimation("tomSleeping",cat1);
   tom.scale=0.2;
   jerry=createSprite(200,600);
   jerry.addAnimation("jerryStanding",mouse1);
   jerry.scale=0.15;


}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide


    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", cat3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", mouse3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",cat2);
    tom.changeAnimation("tomRunning");
      mouse.addAnimation("mouseTeasing",mouse2);
      mouse.frameDelay=25;
      mouse.changeAnimation("mouseTeasing");
      
      

      


  }


}
