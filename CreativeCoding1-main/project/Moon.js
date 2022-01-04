class Moon {
    constructor() {
        this.pos = createVector(Math.random() * 900 - 10, Math.random() * 900 - 10);
        this.speed = createVector(Math.random() * 3 - 1.5, Math.random() * 3 - 1.5);
        this.mass = Math.round(Math.random() * 3 + 1);
        this.size = this.mass * 5;
        this.accel = createVector(0,0);
    }

    applyForce(force) {
        /*
        Newtons 2nd Law:
        Force = Mass * Acceleration
        Acceleration = Force / Mass
        */
        let f = p5.Vector.div(force, this.mass);
        this.accel.add(f);
    }

    update() {
        this.speed.add(this.accel);
        this.pos.add(this.speed);
        this.accel.mult(0);
    }

    render() {
        push();
        translate(this.pos.x, this.pos.y);
        let angle = atan2(this.speed.x, this.speed.y);
        rotate(angle);
        fill(150);
        ellipse(0, 0, this.size, this.size);
        pop();
    }
}