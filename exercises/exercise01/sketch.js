let myArrow;
let myArrow2;
let myArrow3;
let myArrow4;

let dx;
let dy;
let angle;

let dx2;
let dy2;
let angle2;

let dx3;
let dy3;
let angle3;

let dx4;
let dy4;
let angle4;

function setup() {
    createCanvas(1080, 900);
    background(0, 200, 250);

    myArrow = new Arrow(width / 2, height / 2, 0);
    myArrow2 = new Arrow(200, 200, 0);
    myArrow3 = new Arrow(300, 600, PI / 2);
    myArrow4 = new Arrow(500, 350, 4.71);
}

function draw() { }


function mouseMoved() {
    background(0, 200, 250);
    dx = mouseX - myArrow.x;
    dy = mouseY - myArrow.y;
    angle = atan2(dy, dx);
    myArrow.rotation = angle;

    dx2 = mouseX - myArrow2.x;
    dy2 = mouseY - myArrow2.y;
    angle2 = atan2(dy2, dx2);
    myArrow2.rotation = angle2;

    dx3 = mouseX - myArrow3.x;
    dy3 = mouseY - myArrow3.y;
    angle3 = atan2(dy3,dx3);
    myArrow3.rotation = angle3;
    
    dx4 = mouseX - myArrow4.x;
    dy4 = mouseY - myArrow4.y;
    angle4 = atan2(dy4,dx4);
    myArrow4.rotation = angle4;

    myArrow.drawArrow();
    myArrow2.drawArrow();
    myArrow3.drawArrow();
    myArrow4.drawArrow();
}


