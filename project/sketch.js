let moons = [];
let planet;
let oldAmount;

let params = {

    amount: 50,
    amountMin: 1,
    amountMax: 100,

    massOfPlanet: 20,
    massOfPlanetMin: 1,
    massOfPlanetMax: 50,

    gravity: 1,
    gravityMin: 0.1,
    gravityMax:2,
    gravityStep: 0.1,

}

let visible = true;
var gui;

// Fill the array with the moons
function populateArray() {
    for (i = 0; i < params.amount; i++) {
        moons.push(new Moon);
    }
}

function setup() {
    createCanvas(900, 900);
    background(25);
    populateArray();
    planet = new Planet();

    // Create GUI
    gui = createGui('GUI');
    gui.setPosition(930, 100);
    gui.addObject(params);
}

function draw() {
    background(0, 25);
    noStroke();
    // Recreate the array if the values change
    if (oldAmount != params.amount) {
        moons = [];
        populateArray();
    }

    for (let i = 0; i < moons.length; i++) {
        let force = planet.attract(moons[i]);
        moons[i].applyForce(force);
        moons[i].update();
        moons[i].render();
    }

    oldAmount = params.amount;

    // GUI elements for the planet
    planet.updateVals(params.massOfPlanet, params.gravity);
    planet.attract(Moon);
    planet.display();


}