/**
 * Creating Vriables
 * Author Name
 * 
 * Creating variables */

"use strict";

/**
create the canvas*/
function setup() {
    createCanvas(480, 480);
}


/**
draws a hole in a peice of cheese*/
function draw() {

    // the cheese
    background(255, 255, 0);

    //teh hole
    push();
    noStroke();
    fill(0);
    ellipse(140, 175, 180);
    pop();
}