class Planet {
    constructor() {
        this.pos = createVector(width/2, height/2)
        this.size = 50;
        this.mass = 20;
        this.Grav = 1;
    }

    attract(Moon) {
        let force = p5.Vector.sub(this.pos, Moon.pos);
        let dist = force.mag();
        dist = constrain(dist, 5, 25);
        /*
        Newtons law of universal gravitation:
        Force = Gravitational constant * mass1 * mass2 / distance between masses
        */
        let strength = (this.Grav * this.mass * Moon.mass) / (dist * dist);
        force.setMag(strength);
        return force;
    }


    display() {
        ellipseMode(CENTER);
        noStroke();
        fill(10, 200, 10);
        ellipse(mouseX, mouseY, this.size, this.size);
    }

}