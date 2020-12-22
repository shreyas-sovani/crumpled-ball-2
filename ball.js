class Ball{

constructor(x,y,radius){

var opt={
restitution:0.3,
friction:0.5,
density:1.2,

}
this.radius=radius;
this.image=loadImage("paper.png");
this.body=Bodies.circle(x,y,radius,opt);
World.add(world,this.body);


}



display(){


push();
imageMode(RADIUS);
image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
pop();
}



















}




















