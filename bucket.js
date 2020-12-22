class Dustbin{


    constructor(x,y,width,height){

  var opt={
isStatic :true

  }

this.body=Bodies.rectangle(x,y,width,height,opt);
this.width=width;
this.height=height;
this.image=loadImage("dustbingreen.png");
World.add(world,this.body)

    }






display(){

    var pos=this.body.position;
//fill("red");
//imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);





}


}






















