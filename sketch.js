const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 149;
var angle2 = 27;
var angle3 = 49;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options ={
		isStatic: true
	}

	var block1_options ={
		isStatic: true
	}

	var particulas_options ={
		restitution: 0.4,
		friction: 0.02
	}

	var block2_options ={
		isStatic: true
	}

	var rotator_options = {
		isStatic: true
	}

	plane = Bodies.rectangle(200,390,400,50,plane_options);
	World.add(world,plane);
	block1 = Bodies.rectangle(50,250,10,100,block1_options);
	World.add(world,block1);

	particulas1 = Bodies.circle(220,10,10,particulas_options);
	World.add(world,particulas1);
	particulas2 = Bodies.circle(220,10,10,particulas_options);
	World.add(world,particulas2);
	particulas3 = Bodies.circle(220,10,10,particulas_options);
	World.add(world,particulas3);

	block2 = Bodies.rectangle(350,250,10,100,block2_options);
	World.add(world,block2);
	rotator1 = Bodies.rectangle(250,200,125,15,rotator_options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250,200,125,15,rotator_options);
	World.add(world,rotator2)
	rotator3 = Bodies.rectangle(250,200,125,15,rotator_options);
	World.add(world,rotator3)


	Engine.run(engine);
  	Engine.update(engine);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("lightgreen");
  
  fill("yellow");
  rect(plane.position.x,plane.position.y,400,50);

  fill("blue");
  rect(block1.position.x,block1.position.y,45,10);
  fill("blue");
  rect(block2.position.x,block2.position.y,45,10)
  
  fill("red");
  ellipse(particulas1.position.x,particulas1.position.y,10,);
  fill("red");
  ellipse(particulas2.position.x,particulas2.position.y,10,);
  fill("red");
  ellipse(particulas3.position.x,particulas3.position.y,10,);


  ;

  Matter.Body.rotate(rotator1,angle1);
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	 
	angle1 = angle1 +11;

	Matter.Body.rotate(rotator2,angle1);
	push();
	translate(rotator2.position.x,rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	 
	angle2 = angle2 +13;

	Matter.Body.rotate(rotator3,angle3);
	push();
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	 
	angle3 = angle3 +17;



  drawSprites();
 
}
