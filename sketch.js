
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var wall1, wall2, wall3, ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690, 800, 10);
	wall1 = new Trashcan(600, 380, 150, 30);
	wall2 = new Trashcan(550, 380, 30, 150);
	wall3 = new Trashcan(650, 380, 30, 150);
	ball = new Ball(50,390,20);
	Engine.run(engine);

	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
  //Matter.Bodies.circle(50,390,20);
  //ellipse(50,390, 20,20);
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
			Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85})
	}
}



