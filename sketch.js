
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW))
   {
    background("red");
    box.shapeColor = "yellow";
  }
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.shapeColor = "green";
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.shapeColor = "red";
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.shapeColor = "blue";
  }


  
  drawSprites();
}

