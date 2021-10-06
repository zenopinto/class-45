
var bgImg,bg
var jet,jetImg,jetImg2

function preload(){
  bgImg = loadImage("Img/bg.jpg")
  jetImg= loadImage("Img/jet1.png")
  jetImg2= loadAnimation("Img/jet 2.png","Img/jet 3.png")
}



function setup() {
  createCanvas(1400,700);
 
//creating background
bg = createSprite(0,0,1400,600)
bg.addImage(bgImg)
bg.scale=1
bg.velocity.x=-3
bg.x=bg.width/2

//creating jet
jet = createSprite(80,300,20,300)
jet.addImage(jetImg)
jet.scale=1
}


function draw() {
  background(255);  
 
  if(bg.x<0){
    bg.x=bg.width/2

  }
  if(keyDown(UP_ARROW)){
    jet.y=jet.y-4
    
  }

  drawSprites();

}