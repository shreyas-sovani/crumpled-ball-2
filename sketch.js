
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustImg;
function preload()
{
	dustImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

ball=new Ball(200,350,50);
ground=new Ground(400,670,800,20);
dustD=new Dustbin(550,649,150,10);
dustR=new Dustbin(690,587,10,75);
dustL=new Dustbin(550,587,10,70);
dustL.debug=true;
  
}


function draw() {
  rectMode(CENTER);

 //keyPressed();
    

  background("red");


  ground.display();

 

  ball.display();

 // console.log(ball1);
 image(dustImg,550,530,130,130);

// dustL.addImage(dustImg);
 //dustR.addImage(dustImg);

 //dustD.addImage(dustImg);
  drawSprites();
 
}



function keyPressed(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:280,y:-391});
}



}



