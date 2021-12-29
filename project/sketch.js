let moons = [];
let planet;
let amount = 100;

function setup() {
    createCanvas(900, 900);
    background(25);
    for (i = 0; i < amount; i++) {
        moons.push(new Moon);
    }
    planet = new Planet();
}

function draw() {
    background(25);
    noStroke();

    for(let i=0;i<moons.length;i++){
        let force = planet.attract(moons[i]);
        moons[i].applyForce(force);
        moons[i].update();
        moons[i].render();
    }

    planet.display();
}

function mouseMoved(){
    planet.display();
}