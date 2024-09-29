/*
Challenge 1: Write a function to move the target
Add a function called moveTarget() to the program and call it in draw().

This function should:

Check if the user and target circles overlap
If so, it should calculate the distance between the user and the target on x and y separately
Then it should move the target 1 pixel away from the user along the dimension the user is closest on. (e.g. if the user is closest to the puck on the x-axis, then the puck should move away from the user on the x-axis)


Challenge 2: Add a target
Add another circle called target and write a drawTarget() function you will call in draw(). Display the target in the same way as the user and puck but give it a different visual appearance.

Challenge 3: Change the background if the puck is inside the target
Write another function checkPuck() that checks if the puck is currently overlapping the target. If it is, change the colour of the target to indicate it is. If it isn’t, change the colour of the target to indicate it isn’t.
im so done
*/

const USER_CIRC_DIAMETER = 50;
const V_SCALE = 0.0002;

const puck = {
  x: 400,
  y: 400,
  diameter: 30,
  r: 15,
  vx: 0,
  vy: 0,
  fill: 'darkcyan'
}

const target = {
  x: 400,
  y: 400,
  diameter: 80,
  r: 40,
  fill: 'red'
}

function setup() {
  createCanvas(800, 800);
}

// chl 1
function moveTarget() {
  puck.vx += (puck.x - mouseX) * V_SCALE;
  puck.vy += (puck.y - mouseY) * V_SCALE;

  puck.x += puck.vx;
  puck.y += puck.vy;
}

// chl 2
function drawTarget() {
  checkPuck();
  ellipse(target.x, target.y, target.diameter);
}

function checkPuck() {
  let dist = sqrt((target.x - puck.x) * (target.x - puck.x) + (target.y - puck.y) * (target.y - puck.y));
  if (target.r < dist)
    fill(target.fill);
  else
    fill('green');
}

function draw() {
  background(220);

  push();
  
  // moves the puck (ignore the name, your teacher is stupid)
  moveTarget();
  
  // draws the target & checks if the puck and target are colliding
  drawTarget();
  
  // draws the puck & the guidelines i used for testing
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.diameter);
  line(0, puck.y + puck.r, 800, puck.y + puck.r);
  line(0, puck.y - puck.r, 800, puck.y - puck.r);
  line(puck.x + puck.r, 0, puck.x + puck.r, 800);
  line(puck.x - puck.r, 0, puck.x - puck.r, 800);

  // user marker
  fill('gold');
  ellipse(mouseX, mouseY, USER_CIRC_DIAMETER);
  pop();
}
