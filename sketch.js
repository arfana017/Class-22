const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var ourengine,ourworld ,ground, ball;

function setup() {
  createCanvas(400,400);
    ourengine = Engine.create();
    ourworld = ourengine.world;

    var options = {

      isStatic: true

    }
    ground = Bodies.rectangle(200,390,200,20,options);


    var ball_options = {

      restitution: 0.8
    }
    ball = Bodies.circle(200,100,20,ball_options)

    World.add(ourworld,ground)
    World.add(ourworld,ball)
    console.log(ground);

  }

function draw() {
  background(0);
  Engine.update(ourengine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y, 20,20)
 
}