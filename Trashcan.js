class Trashcan{
    constructor(x, y, width, height){
        var options;
        options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body);


    }

    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
    }
}