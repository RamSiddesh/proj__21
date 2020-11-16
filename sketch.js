
var wall,thickness; 
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  thickness = random(22,83);
   bullet = createSprite(0,200,50,30);
   wall = createSprite(780,200,thickness,height/2);
   speed = random(223,321);
  weight = random(30,52);
  
}

function draw() {
  background("lightblue");  
  bullet.velocityX = speed;
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }
  if (damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }
  
  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
  drawSprites();
}
function hasCollided(lbullet , lwall)
{
 bulletRightEdge=lbullet.x+lbullet.width;
 wallLeftEdge = lwall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
    return true
 }
    return false
}
