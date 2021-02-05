
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1043,114,30);
	mango3=new mango(992,285,30);
	mango4=new mango(920,220,30);
	mango5=new mango(1178,191,30);
	mango6=new mango(1064,284,30);
	mango7=new mango(1140,135,30);
	mango8=new mango(1235,268,30);
	mango9=new mango(1000,180,30);
	mango10=new mango(1070,224,30);
	mango11=new mango(1010,240,30);
	mango12=new mango(1130,234,30);

	treeObj=new tree(1050,599);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(240,445);
	launcherObject=new Launch(stoneObj.body,{x:240,y:445})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(24)
  text("Press 'SPACE' to get second chance to play!!",250,60)
  image(boy ,200,370,200,300);
  //console.log(mouseX,mouseY);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  launcherObject.display();
  stoneObj.display();
  
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  detectCollision(stoneObj,mango12);
  

  groundObject.display();
  
}
function mouseDragged(){
    
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});


}


function mouseReleased(){
    
        launcherObject.fly();
        
    
}

function keyPressed(){
    if(keyCode === 32){
    launcherObject.attach(stoneObj.body);
    }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
