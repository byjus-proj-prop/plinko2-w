class Particle {
    constructor() {
        var options = {
            "restituition":0,
            "friction":0.5
        }
        this.body = Bodies.circle(random(300,350),20,10,options);
        this.i = 0;
        World.add(world, this.body);
    }
    display() {
        fill(color(random(10,255),random(10,255),random(10,255)));
        circle(this.body.position.x,this.body.position.y,20);
    }
    score() {
        if(this.i<1){
            if(25<this.body.position.x<25+80 || 25+81<this.body.position.x<25+80*2
                || 25+8*2<this.body.position.x<25+80*3 || 25+8*3<this.body.position.x<25+80*4) {
                    if(this.body.position.y>=533){ score+=500;
                    this.i++}
                }
                if(25+80*4<this.body.position.x<25+80*5 || 25+80*5<this.body.position.x<25+80*6
                    || 25+8*6<this.body.position.x<25+80*7) {
                    if(this.body.position.y>=533) {score+=100;
                    this.i++}
                }
        }
    }
}