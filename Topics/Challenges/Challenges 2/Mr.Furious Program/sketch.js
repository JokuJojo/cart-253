/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let sky = {
  red: 80,
  green: 150,
  blue: 229
}


let mrFurious = {
  // Position and size
  x: 400,
  y: 700,
  size: 100,
  // Colour
  fill: {
    r: 225,
    g: 225,
    b: 225


  }
};

//bird
let bird = {
  X: 50,
  Y: 40
}

 //Anoying bird






/**
 * Create the canvas
 */
function setup() {
  createCanvas(800, 800);
}

/**
 * Draw (and update) Mr. Furious
 */

function draw() {

// bird fly

bird.X = bird.Y - 3;
bird.Y = bird.X + 8;

  mrFurious.fill.g = constrain(mrFurious.fill.g -2, 0, 255);
  mrFurious.fill.b = constrain(mrFurious.fill.b -2, 0, 255);

  mrFurious.angryX =   mrFurious.angryX - 2;
  mrFurious.angryY =  mrFurious.angryX - 2;

  sky.red = constrain(sky.red -2, 0, 255) ;
  sky.green = constrain(sky.green -2, 0, 255);
  sky.blue = constrain(sky.blue -2, 0, 255);

  background(sky.red, sky.green, sky.blue);

  let angryX = random(500, 550);
  let angryY = random(500, 550);


  fill(100, 100, 200);
  noStroke();
  ellipse(bird.X, bird.Y, 30);

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(angryX, angryY, mrFurious.size);
  pop();

}