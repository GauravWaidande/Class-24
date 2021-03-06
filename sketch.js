const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;

function setup(){

    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    box3=new Box(700,250,70,70);
    box4=new Box(900,250,70,70);
    box5=new Box(800,100,70,70);
    log1 = new Log(800,280,300,PI/2);
    ground = new Ground(600,height,1200,20);
    pig1=new Pig(800,350);
    pig2=new Pig(800,230);
    log2=new Log(800,200,300,PI/2);
    log3=new Log(730,120,150,PI/7);
    log4=new Log(870,120,150,-PI/7);
    bird1=new Bird(100,100);

}

function draw(){

    background(0);

    Engine.update(engine);

    text(mouseX+":"+mouseY,mouseX,mouseY);

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();

}