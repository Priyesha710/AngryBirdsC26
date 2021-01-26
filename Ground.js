class Ground {
    constructor(xInput, yInput, widthInput, heightInput) {
        var options = {
            'isStatic': true
        }
        this.width = widthInput;
        this.height = heightInput;
        this.body = Bodies.rectangle(xInput, yInput, this.width, this.height, options);
        World.add(userWorld, this.body);
    }
    display() {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}