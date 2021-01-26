class BaseClass {
    constructor(x,y,width,height,angle){
        var options = {
            'restitution': 1,
            'density' : 1.5,
            'friction' : 1
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("images/base.png");
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(userWorld,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}