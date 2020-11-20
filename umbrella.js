class umbrella{

constructor(x,y){

var options = {

isStatic : true,
friction : 0.3

}

this.body = Bodies.circle(x,y-170,150,options);
this.animation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
this.x = x;
this.y= y;
Worldc.add(world,this.body);

}

display(){
    
animation (this.animation,this.x,this.y);

}


}