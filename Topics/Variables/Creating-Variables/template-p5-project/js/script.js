/**
 * Creating Vriables
 * Author Name
 * 
 * Creating variables */

"use strict";

let cheeseRed = 255;
let cheeseGren = 255;
let cheeseBlue = 0;

let holeShade = 0;
let holeSize = 120;
let holeX = 140;
let holSize = 120;

/**
create the canvas*/
function setup() {
    createCanvas(480, 480);
}


/**
draws a hole in a peice of cheese*/
function draw() {

    // the cheese
    background(cheeseRed, cheeseGreen, cheeseBlue);

    //teh hole
    push();
    noStroke();
    fill(0);
    ellipse(140, 175, holesize);
    pop();
}