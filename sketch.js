
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	Engine.run(engine);
	
	hammer1 = new Hammer(100,100);
	rubber1 = new Rubber(700,340,70,70);
	stone1 = new Stone(810, 340, 70, 50);
	plane1 = new Plane(600, height, 1200, 20);
	ball1 = new Ball(910,340,70,30)

	
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  hammer1.display();
  rubber1.display();
  stone1.display();
  plane1.display();
  ball1.display();
  
  drawSprites();
 
}



