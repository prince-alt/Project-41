const Worldc = Matter.World;
const Body = Matter.Body;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world,engine;
var maxdrops = 100;
var drops = [];
var umbrella1;
var lightning;
var l1,l2,l3,l4;

function preload(){

    l1 = loadImage("thunderbolt/1.png");
    l2 = loadImage("thunderbolt/2.png");
    l3 = loadImage("thunderbolt/3.png");
    l4 = loadImage("thunderbolt/4.png");
    
    
}

function setup(){

    createCanvas(displayWidth,1000);
   
    engine = Engine.create();
    world = engine.world;

    umbrella1 = new umbrella(displayWidth/2,displayHeight/2+200);

    for(var i = 0; i < maxdrops; i++){

   drops.push(new drop(random(0,displayWidth),random(0,displayHeight)));

    }
    
}

function draw(){

    background("black");

    for(var t = 0; t<drops.length; t++){

   drops[t].display();
   drops[t].update();

    }

    umbrella1.display();

    thunder();

    Engine.update(engine);

    drawSprites();
    
}

function thunder(){

if(frameCount%60==0){

lightning = createSprite(0,0,50,50);
lightning.x = Math.round(random(100,700));
var rand = Math.round(random(1,4));

switch (rand) {
    case 1: lightning.addImage(l1);
        
        break;

        case 2: lightning.addImage(l2);
        
        break;

        case 3: lightning.addImage(l3);
        
        break;

        case 4: lightning.addImage(l4);
        
        break;

    default:
        break;
}
lightning.scale = 0.8;
lightning.lifetime = 20;
}

}

