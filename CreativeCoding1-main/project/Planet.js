class Planet {
    constructor() {
        this.pos = createVector(width / 2, height / 2)
        this.size = 30;
        this.mass = 20;
        this.grav = 1;
    }

    updateVals(ms,gv){
        this.mass = ms;
        this.grav = gv;
    }

    attract(Moon) {
        let force = p5.Vector.sub(this.pos, Moon.pos);
        let dist = force.mag();
        dist = constrain(dist, 5, 25);
        /*
        Newtons law of universal gravitation:
        Force = Gravitational constant * mass1 * mass2 / distance between masses
        */
        let strength = (this.grav * this.mass * Moon.mass) / (dist * dist);
        force.setMag(strength);
        return force;
    }


    display() {
        ellipseMode(CENTER);
        noStroke();
        fill(10, 200, 10);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

}