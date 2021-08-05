
function preload() {
    tomImg1=loadAnimation("images/cat1.png")
    tomImg2=loadAnimation("images/cat2.png")
    tomImg3=loadAnimation("images/cat3.png")
    tomImg4=loadAnimation("images/cat4.png")

    mouseImage=loadAnimation("images/mouse1.png")
    mouseImage2=loadAnimation("images/mouse2.png")
    mouseImage3=loadAnimation("images/mouse3.png")
    mouseImage4=loadAnimation("images/mouse4.png")

    bgImg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomSleppy",tomImg1)
    tom.scale=0.2

    jerry=createSprite(200,600);
    jerry.addAnimation("standingjerry",mouseImage)
    jerry.scale=0.15

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
     tom.velocityX=0;
     tom.addAnimation("catLastImage",tomImg3)
     tom.x=300;
     tom.scale=0.2
     tom.changeAnimation("catLastImage")   

     jerry.addAnimation("mouseLastImage",mouseImage3)
     jerry.scale=0.15
     jerry.changeAnimation("mouseLastImage")   

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX= -5
    tom.addAnimation("catRunning",tomImg2)
    tom.changeAnimation("catRunning")  
    
    jerry.addAnimation("mouseTeasing",mouseImage2)
    jerry.frameDelay=25
    jerry.changeAnimation("mouseTeasing")   

}

}
