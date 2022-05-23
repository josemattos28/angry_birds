const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var pig2;
var wood5;

var wood1;
var wood2;
var wood3;
var wood4;

var bird;

var box5;
var box4; 
var box3;
var fundo;
var  bodys


function preload(){
fundo = loadImage("bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    box4 = new Box(700,265,70,70);
    box3 = new Box(920,265,70,70);
    ground = new Ground(600,height,1210,20)
    pig1 = new Pig(810,300)
    bird = new Bird(100,100)
    wood1 = new Wood(810, 270, 300, PI/2)
    wood2 = new Wood(810, 230, 300, PI/2)
    pig2 = new Pig(810,265)
    box5 = new Box(810,195,70,70);
    wood3 = new Wood(748, 120, 150, PI/7)
    wood4 = new Wood(890, 120, 140, PI/-7)
    bodys = new Rest(bird.body, {x:200, y:100})
}

function draw(){
    background(fundo);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    wood1.display();
    box3.display();
    box4.display();
    pig2.display();
    wood2.display();
    box5.display();
    wood3.display();
    wood4.display();
    bird.display();
    bodys.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    bodys.fly()
}

