class box{
    constructor(x,y,width,height)
    {
    this.body=Matter.Bodies.rectangle(x,y,width,height);
    this.height=height;
    this.width=width;
    Matter.World.add(world,this.body);
    console.log(this.body);
    }
    
    display()
    {
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        angleMode(RADIANS);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
    
    }