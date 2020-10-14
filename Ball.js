class Ball{
    constructor(x, y, radius){
        var options;
        options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
        }
        this.width = width;
        this.height = height;
        this.radius= radius
        this.body = Bodies.circle(x, y, radius, options)
        World.add(world, this.body);
        keyPressed();

    }

    display(){
        keyPressed();
        var pos = this.body.position
        rectMode(CENTER);
        fill(255);
        ellipse(pos.x, pos.y, this.radius);
    }
}