/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 175
        // color: 181, 230, 29;
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
    //Eyes Left
     eyeL: {
        x:480,
        y:480,
        size:55
     },

     pupilL: {
        x:480,
        y:468,
        size:25
     },

     //Eyes Right
     eyeR: {
        x:480,
        y:480,
        size:55
     },

     pupilR: {
        x:480,
        y:468,
        size:25
     }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 5
};
 
//How much time is left till night
function timer() {
    let countdown = 0;
    let timeRemaining = 60;
}

function updateDisplay() {
    const minutes = math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
}

function stopCountdown() {
    clearInterval(countdown);
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // setInterval(timer, 1000)
    // if (timeRemaining > 0) {
    //     timeRemaining--;
    //     updateDisplay();
    // } else {
    //     clearInterval(countdown);
    //     alert("It's sexy time!");
    // }
    // Give the fly its first random position
    resetFly();
}

function draw() {
    background("#87ceeb");
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
}

function drawTimer () {
    push();
    text (minutes);
    size (10);
    color ("black");
    pop();
}
/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();

// //wing Left
// push();
// noStroke();
// fill("white");
// ellipse(wingL.x, wingL.y, wingL.size);
// pop();

// //wing Right
// push();
// noStroke();
// fill("white");
// ellipse(wingR.x, wingR.y, wingR.size);
// pop();

}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
    frog.eyeL.x = mouseX -60;
    frog.pupilL.x = mouseX -60;
    frog.eyeR.x = mouseX +60;
    frog.pupilR.x = mouseX +60;
}


/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("pink");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill(181, 230, 29); //Frog color
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();

    //Draw the frog's left eye
    push();
    fill ("white");
    stroke(181, 230, 29);
    strokeWeight (6);
    ellipse(frog.eyeL.x, frog.eyeL.y, frog.eyeL.size);
    pop();

    //Draw the frog's left pupil
    push();
    fill ("black");
    noStroke ();
    ellipse(frog.pupilL.x, frog.pupilL.y, frog.pupilL.size);
    pop();
    
     //Draw the frog's right eye
    push();
    fill ("white");
    stroke(181, 230, 29);
    strokeWeight (6);
    ellipse(frog.eyeR.x, frog.eyeR.y, frog.eyeR.size);
     pop();
    
     //Draw the frog's right pupil
    push();
    fill ("black");
    noStroke ();
    ellipse(frog.pupilR.x, frog.pupilR.y, frog.pupilR.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Frog gets fat
        frog.body.size = frog.body.size +3;
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}