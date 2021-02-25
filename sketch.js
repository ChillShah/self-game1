const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ninja;

function preload(){
    jungle=loadImage("images/jungleninja.jpg")
}
function setup(){
    var canvas = createCanvas(displayWidth-10,displayHeight-10);
    
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
  
    ground = Bodies.rectangle(displayWidth/2,displayHeight-20,displayWidth,20,ground_options);
    World.add(world,ground);

    var ninja_options ={
        restitution: 1.0
    }

    ninja = Bodies.rectangle(displayWidth/4,displayHeight-40,20,20, ninja_options);
    World.add(world,ninja);

    console.log(ground);
}

function draw(){
    background(jungle);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,displayWidth,20);

    rectMode(CENTER);
    rect(ninja.position.x, ninja.position.y, 20, 20);
}