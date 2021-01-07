const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(900, 750);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(419,180,380,35);

	bob1 = new Bob(280,530,70);
	bob2 = new Bob(350,530,70);
	bob3 = new Bob(420,530,70);
	bob4 = new Bob(490,530,70);
	bob5 = new Bob(560,530,70);

	rope1 = new Rope(bob1.body,roof.body,-135,0);
	rope2 = new Rope(bob2.body,roof.body,-70,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,70,2);
	rope5 = new Rope(bob5.body,roof.body,140,2);

	//Create the Bodies Here.

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(200);	

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  drawSprites();

}

function keyPressed() { 
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob5.body.position,{x:-130,y:-150});
	}
} 