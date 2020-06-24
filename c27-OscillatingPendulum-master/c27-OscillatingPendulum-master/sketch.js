
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var beam,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();  
  beam = new Beam();
  ball = new Ball(200,300,30);
  string = new String({x:200,y:100},ball.body);
  
}


function draw() {
  background("salmon"); 
  Engine.update(engine);

  textSize(10);
  fill("black")
  text("Drag mouse to oscillate the pendulum to left and right with mouse",50,30);
  text("Press Enter to stop the Pendulum from oscillating",80,60);

  ground.display();
  beam.display();
  ball.display();
  string.display();
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
 
  Matter.Body.setStatic(ball.body, false);
 
}
function keyPressed(){
if(keyCode=ENTER){
  Matter.Body.setStatic(ball.body, true);
  
}
}



   




