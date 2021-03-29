
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var ground1;
var bin1,bin2,bin3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	
ball1=new Ball();
ground1=new Ground();

bin=new Bin(1000,180,10,103);
bin2=new Bin(1150,180,10,103);
bin3=new Bin(1000,275,160,10);

	
  
}


function draw() {
	Engine.update(engine);
 
  background(0);
 
  ball1.display();
  ground1.display();

bin.display();
bin2.display();
bin3.display();
  
 
}

function keyPressed(){
	
  if (keyCode===UP_ARROW){
  
  
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:550,y:-550});
  }
  }

