
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3;




	

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	
	//Crie os Corpos Aqui.
	
	var block_options1 = {
		restitution: 0.5,
		friction:0.2,
		frictionAir:0
	}
	
	var block_options2 = {
		restitution: 0.7,
		friction:0.1,
		frictionAir:0.1
	}
	var block_options3 = {
		restitution: 0.01,
		friction:2,
		frictionAir:0.3
	}

	var ground_options={
		isStatic : true
	}

	Engine.run(engine);
  
	block1 = Bodies.circle(220,10,10,block_option1s);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block_options2);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block_options3);
	World.add(world,block3);

	ground = Bodies.rectangle(350,50,400,20,block_options3);
	World.add(world,ground);

	fill();
	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  //rectMode(CENTER); não entedemos porque
  background(0,0,0);
  ellipse(block1.position.x,block1.position.y,20);
  ellipse(block2.position.x,block2.position.y,20);
  ellipse(block3.position.x,block3.position.y,20);

  rect(ground.position.x,ground.position.y,400,20)
  Engine.update(engine);
  drawSprites();
 
}



