/**
 * INtroducing Variables
 * Joku Jojo
 * 
 * Learning Vraibles
 */

"use strict";

/**
 * create canvas
*/
function setup() {
    createCanvas(1000, 480);

}


/**
 * circle
*/
function draw() {
    background(0);


    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
    pop();
}