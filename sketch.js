var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  rect1=createSprite(200,200, 60,70);
  rect1.shapeColor = "green";
  rect1.debug= true;

  rect2=createSprite(300,300, 60,70);
  rect2.shapeColor = "green";
  rect2.debug= true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(rect1,movingRect)){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red"; 
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}
