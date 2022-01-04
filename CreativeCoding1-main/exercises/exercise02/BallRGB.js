class BallRGB {
	constructor(x, y, vx, vy, radius, r, g, b, rotation) {
		//properties
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = r;
		this.g = g;
		this.b = b;
		this.rotation = rotation;

	}

	updateVals(newX, newY, newVx, newVy, newRadius, newR, newG, newB, newRot) {
		this.x = newX;
		this.y = newY;
		this.vx = newVx;
		this.vy = newVy;
		this.radius = newRadius;
		this.r = newR;
		this.g = newG;
		this.b = newB;
		this.rotation = newRot;
	}

	//function to draw the ball
	drawBall() {
		angleMode(DEGREES);
		//push();
		//translate(this.x, this.y);
		//rotate(this.rotation);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
		//pop();
	}

	//function to move the ball
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;

		if (this.x > width) { this.vx = -this.vx }
		if (this.x < 0) { this.vx = -this.vx }
		if (this.y > height) { this.vy = -this.vy }
		if (this.y < 0) { this.vy = -this.vy }
	}

}




