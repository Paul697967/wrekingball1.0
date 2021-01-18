const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   box1 = new Box(700,420,70,70);
    //box2 = new Box(920,320,70,70);
   ground = new Ground(600,500,1200,20)
   box2 = new Box(700,350,70,70)
   box3 = new Box(700,280,70,70)
   box4 = new Box(700,210,70,70)
   box5 = new Box(700,140,70,70)
   ball1= new Ball(200,200,80,80)
   rope = new Rope(ball1.body,{x:500,y:50})
}

function draw(){
    background("white");
    Engine.update(engine);
    
  //  box1.display();
     ground.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     ball1.display();
     rope.display();
}

function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

}
