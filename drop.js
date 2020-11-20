class drop{

constructor(x,y){

this.rain = Bodies.circle(x,y,10);
Worldc.add(world,this.rain);    

    
}

update(){

if(this.rain.position.y>900){

Matter.Body.setPosition(this.rain,{x:random(0,displayWidth),y:0});

}

}

display(){


push ();
ellipseMode(RADIUS);
fill("darkblue");
noStroke();
ellipse(this.rain.position.x,this.rain.position.y,5,5);
pop ();

}

}