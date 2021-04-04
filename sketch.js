const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1800, 20);

  box1 = new Box(900, 100, 40, 40);
  box2 = new Box(900, 100, 40, 40);
  box3 = new Box(900, 100, 40, 40);
  box4 = new Box(900, 100, 40, 40);
  box5 = new Box(900, 100, 40, 40);
  box6 = new Box(900, 100, 40, 40);
  
  box7 = new Box(800, 100, 40, 40);
  box8 = new Box(800, 100, 40, 40);
  box9 = new Box(800, 100, 40, 40);
  box10 = new Box(800, 100, 40, 40);
  box11 = new Box(800, 100, 40, 40);
  box12 = new Box(800, 100, 40, 40);
  box13 = new Box(700, 100, 40, 40);
  box14 = new Box(700, 100, 40, 40);
  box15 = new Box(700, 100, 40, 40);
  box16 = new Box(700, 100, 40, 40);
  box17 = new Box(700, 100, 40, 40);
  box18 = new Box(700, 100, 40, 40);
  box19 = new Box(700, 100, 40, 40);
  box20 = new Box(700, 100, 40, 40);
  box21 = new Box(600, 100, 40, 40);
  box22 = new Box(600, 100, 40, 40);
  box23 = new Box(600, 100, 40, 40);
  box24 = new Box(600, 100, 40, 40);
  box25 = new Box(600, 100, 40, 40);
  box26 = new Box(600, 100, 40, 40);
  box27 = new Box(600, 100, 40, 40);
  box28 = new Box(600, 100, 40, 40);
  box29 = new Box(500, 100, 40, 40);
  box30 = new Box(500, 100, 40, 40);
  box31 = new Box(500, 100, 40, 40);
  box32 = new Box(500, 100, 40, 40);
  box33 = new Box(500, 100, 40, 40);
  box34 = new Box(500, 100, 40, 40);
  box35 = new Box(500, 100, 40, 40);
  box36 = new Box(500, 100, 40, 40);
  box37 = new Box(400, 100, 40, 40);
  box38 = new Box(400, 100, 40, 40);
  box39 = new Box(400, 100, 40, 40);
  box40 = new Box(400, 100, 40, 40);
  box41 = new Box(400, 100, 40, 40);
  box42 = new Box(400, 100, 40, 40);
  box43 = new Box(400, 100, 40, 40);
  box44 = new Box(400, 100, 40, 40);
  box45 = new Box(900, 100, 40, 40);
  box46 = new Box(900, 100, 40, 40);
  box47 = new Box(800, 100, 40, 40);
  box48 = new Box(800, 100, 40, 40);
  


  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 155, y: 150 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  box27.display()
  box28.display()
  box29.display()
  box30.display ()
  box31.display ()
  box32.display ()
  box33.display ()
  box34.display ()
  box35.display ()
  box36.display ()
  box37.display ()
  box38.display ()
  box39.display ()
  box40.display ()
  box41.display ()
  box42.display ()
  box43.display ()
  box44.display ()
  box45.display()
  box46.display()
  box47.display()
  box48.display()

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


