class Umbrella{

    constructor(x,y){

        var options={
            isStatic:true
        }

        this.image=loadImage("images/Walking Frame/walking_1.png");

        this.shade=Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(world,this.shade);
    }

    display(){
        var pos=this.shade.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300);
    }
}