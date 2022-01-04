let ball1;
let ball2;
let ball3;
let ball4;

function setup() {
    createCanvas(500, 500);
    background(0,255,0);
    ball1 = new BallRGB(10,10,2,3,10,255,0,0);
    ball2 = new BallRGB(10,10,5,5,10,0,0,255);
    ball3 = new BallRGB(200,240,15,0,20, 200,20,10);
    ball4 = new BallRGB(100,240,15,0,20,200,200,0);
}

function draw() {
    background(0,255,0);
    noStroke();
    ball1.drawBall();
    ball1.moveBall();

    ball2.drawBall();
    ball2.moveBall();

    ball3.drawBall();
    ball3.moveBall();

    ball4.drawBall();
    ball4.moveBall();
}