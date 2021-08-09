const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  myEngine = Engine.create ();
  myWorld = myEngine.world;


     var opt2 ={

       restitution:1 


     }


     
  ball1 = Bodies.rectangle (400,50,30,30,opt2);
  World.add(myWorld,ball1);

  var opt={

     isStatic:true 

  } 




 ground = Bodies.rectangle(0,380,800,20 , opt);
 World.add(myWorld,ground);








}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine);

  rect(ball1.position.x , ball1.position.y ,30,30);

  rect(ground.position.x , ground.position.y , 800 ,20);
  drawSprites();
}