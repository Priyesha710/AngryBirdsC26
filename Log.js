class Log extends BaseClass {
    constructor(xInput, yInput, heightInput, angleInput) {
        super(xInput,yInput,20,heightInput,angleInput);
      
        this.image = loadImage("images/wood2.png");      
        Matter.Body.setAngle(this.body,angleInput);
        

    }
    
}