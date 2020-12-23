// namespacing(providing nicknames to predefined keywords)

const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world,body1,ground;

function setup() {

     engine =Engine.create();
        world = engine.world;

     body1=Bodies.rectangle(100,200,50,50);
     World.add(world,body1);
     
     var options={
       isStatic: true
      
     }

     ground=Bodies.rectangle(200,380,400,20,options);
     World.add(world,ground);


     var ball_options={
       restitution:1.5
     }
     body2=Bodies.circle(80,50,20,ball_options);   //(x,y,radius)
     World.add(world,body2)






  createCanvas(400,400);
   //createSprite(200, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(250,205,20); 
  fill("red")
  rectMode(CENTER)
  rect(body1.position.x,body1.position.y,50,50) ;
  console.log(body1.position);
  
  fill("brown")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  drawSprites();


  fill("pink");
  ellipseMode(RADIUS);
  ellipse(body2.position.x,body2.position.y,20,20)
}