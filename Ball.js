class Ball{
    constructor(){
        var options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.circle(70,250,50,options);
      
        

        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        
       push()
        

fill("magenta");

ellipse(pos.x,pos.y,50,50);
pop();
    }
}
