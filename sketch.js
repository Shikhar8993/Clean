
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbin1,dustbin2;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




    dustbin = new Dustbin(580,645,10,80);
    dustbin1 = new Dustbin(460,645,10,80);
	dustbin2 = new Dustbin(520,685,130,10);

	ball=new Ball(25,645,10);

    //fill("red");
	ground = Bodies.rectangle(300,690, 1000, 20 , {isStatic:true} );
	World.add(world, ground);
	


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("black");

	rect(ground.position.x,ground.position.y,1000,20);

	dustbin.display();
	dustbin1.display();
	dustbin2.display();
	ball.display();
   
  drawSprites();
 
}

function keyPressed(){
 
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50})
	   }

	}
