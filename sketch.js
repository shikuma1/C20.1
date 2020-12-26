var fixedRect, movingRect
var gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80)
  movingRect = createSprite(400,200,80,30)
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"

  gameObject1 = createSprite(100,100,50,50)
  gameObject2 = createSprite(200,100,50,50)
  gameObject3 = createSprite(300,100,50,50)
  gameObject4 = createSprite(400,100,50,50)

  gameObject1.shapeColor = "green"
  gameObject2.shapeColor = "green"
  gameObject3.shapeColor = "green"
  gameObject4.shapeColor = "green"
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  console.log(movingRect.x-fixedRect.x)
  if(isTouching(gameObject3, movingRect)){
    movingRect.shapeColor = "pink"
    gameObject3.shapeColor = "pink"
  } else if(isTouching(gameObject1, movingRect)) {
    gameObject1.shapeColor = "yellow"
    movingRect.shapeColor = "yellow"
  } else if(isTouching(gameObject2, movingRect)) {
    gameObject2.shapeColor = "lightblue"
    movingRect.shapeColor = "lightblue"
  } else if (isTouching(gameObject4,movingRect)){
    gameObject4.shapeColor = "purple"
    movingRect.shapeColor = "purple"
  } else if (isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "orange"
    movingRect.shapeColor = "orange"
  } else{
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
    gameObject1.shapeColor = "green"
    gameObject2.shapeColor = "green"
    gameObject3.shapeColor = "green"
    gameObject4.shapeColor = "green"
  }
  
  drawSprites();
  
}

function isTouching(object1, object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2 
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.width/2 + object2.width/2){
    return true

  } else{
    return false   
  }



}