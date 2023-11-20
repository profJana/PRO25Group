
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var botao;

var angle = 0;

var g1, g2, g3;


function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.90, //elasticidade
    frictionAir: 0.01 // atrito com o ar
  }

  var ground_options = {
    isStatic: true
  };

  botao = createImg('up.png');
  botao.position(340, 30);
  botao.size(50, 50);
  botao.mouseClicked(verticalForce);

  g1 = new Ground(0,200,10,400);
  g2 = new Ground(400,200,10,400);
  g3 = new Ground(200,0,400,10);

  ground1 = Bodies.rectangle(200, 200, 100, 20, ground_options);
  World.add(world, ground1);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);


  ground = Bodies.rectangle(100, 400, 650, 20, ground_options);
  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);

  Matter.Body.rotate(ground1, angle)
  push();
  translate(ground1.position.x, ground1.position.y);
  rotate(angle);
  rect(0, 0, 100, 20);
  pop();

  angle += 0.01;

  g1.show();
  g2.show();
  g3.show();
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 650, 20);

}

function verticalForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: -0.05, y: 0 });
}
