
var iss_img, spaceBackground;
var spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4;
var hasDocked;
var hasDocked = false;

function preload(){
  iss_img = loadImage("iss.png");
  spaceBackground = loadImage("spacebg.jpg");
  spaceCraft1 = loadImage("spacecraft1.png");
  spaceCraft2 = loadImage("spacecraft2.png");
  spaceCraft3 = loadImage("spacecraft3.png");
  spaceCraft4 = loadImage("spacecraft4.png");
}


function setup() {  
  createCanvas(600,350);
  spaceCraft = createSprite(285, 240);
  spaceCraft.addImage(spaceCraft1);
  spaceCraft.scale = 0.15;
  iss = createSprite(330,130);
  iss.addImage(iss_img);
  iss.scale = 0.8;
}


function draw() {
  background(spaceBackground);  
  spaceCraft.addImage(spaceCraft1);
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);
    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y - 2;
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(spaceCraft4);
      spaceCraft.x = spaceCraft.x - 1;
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(spaceCraft3);
      spaceCraft.x = spaceCraft.x + 1;
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(spaceCraft2);
    }
  }
  if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successfull", 200, 300);
  }
  drawSprites();
}