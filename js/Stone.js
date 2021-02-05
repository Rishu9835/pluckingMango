class Stone{
   
    constructor(x,y,r){

        var options={
            isStatic:false,
          restitution:0,
          friction : 1.0,
          density : 1.2,
        }
      this.body=Bodies.circle(x,y,10,options);
      this.r=10;
      
      this.image = loadImage("images/stone.png");
      
       World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
         

        ellipseMode(RADIUS);
        fill("red");
        stroke("orange");
        strokeWeight("1");
        ellipse(0,0,this.r);
        imageMode(CENTER)
        image(this.image,0,0)
        pop();

    }
}