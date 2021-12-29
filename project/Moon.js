class Moon {
    constructor() {
        this.pos = createVector(Math.random() * 900 - 10, Math.random() * 900 - 10, Math.random() * 900 - 10, Math.random() * 900 - 10);
        this.speed = createVector(Math.random() * 3 - 1.5, Math.random() * 3 - 1.5, Math.random() * 3 - 1.5, Math.random() * 3 - 1.5);
        this.mass = Math.round(Math.random() * 5 + 1);
        this.size = this.mass * 5;
        this.accel = createVector(mouseX, mouseY);
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
    /*
        move() {
            this.pos.x += this.speed.x;
            this.pos.y += this.speed.y;
    
            if (this.pos.x > 900) { this.pos.x = 0 }
            if (this.pos.x < 0) { this.pos.x = 900 }
            if (this.pos.y > 900) { this.pos.y = 0 }
            if (this.pos.y < 0) { this.pos.y = 900 }
        }
    */
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