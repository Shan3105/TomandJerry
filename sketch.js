var g, c, m; 
var gI, cI1,CI2,CI3,CI4,mI1,mI2,mI3,mI4;
function preload() {
    //load the images here
  gI = loadImage("garden.png");
  cI2 = loadAnimation("cat2.png");
  cI1 = loadAnimation("cat1.png");
  cI3 = loadAnimation("cat3.png");
  cI4 = loadAnimation("cat4.png");
  mI1 = loadAnimation("mouse1.png");
  mI2 = loadAnimation("mouse2.png");
  mI3 = loadAnimation("mouse3.png");
  mI4 = loadAnimation("mouse4.png");
  

  }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    c=createSprite(900, 700, 10,10);
    c.addAnimation("catty",cI1);
    c.scale=0.1;
    c.velocityX = 0;

    m=createSprite(250, 700, 10,10);
   m.addAnimation("mousy",mI1);
   m.scale = 0.1;
  
  
}

function draw() {

   // background(255);
   image(gI,0,0,width,height);
    //Write condition here to evalute if tom and jerry collide
  if (c.isTouching(m)){
    m.addAnimation("mouse1.png", mI1);
    m.changeAnimation("mouse1.png");
    c.x = c.x + 20;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
  c.x = c.x - 20;
m.addAnimation("mouse2.png",mI2);
m.changeAnimation("mouse2.png");
}


}
