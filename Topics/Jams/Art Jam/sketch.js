//Don't pull on kitty's tail
//don't pull kitty's tail or he'll gets so mad, his eyes will
//turn red, he'll hiss and the sky will turn black

//wall
function setup() {
  createCanvas(900, 1000);

}

function draw() {
  background("Gold");

  //window
  stroke("white");
  strokeWeight(10);
  fill("skyblue");
  square(185, 150, 550)
  
  line(730, 420, 190, 420);
  line(460, 150, 460, 700);

  //Kitty!!!
  noStroke();  
  fill("black");

  //Ears
  triangle(420, 410, 490, 460, 440, 360);
  triangle(450, 410, 510, 440, 480, 360);

  //Body
  ellipse(520, 580, 160, 270);
  ellipse(460, 440, 110, 110);

  //Eyes 
  noStroke();
  fill("greenyellow");
  ellipse(430, 430, 30, 20);
  ellipse(475, 430, 30, 20);
  //Pupil
  stroke("black");
  strokeWeight(14);
  line(430, 420, 430, 440)
  line(475, 420, 475, 440)

  //tail
    // Rotate around the y-axis.
    rotateY(frameCount * 0.01);

    // Draw a line.
    line(200, 200, 200, 230, 220, -210);
  
    // Draw the center sphere.
    sphere(10);
  
    // Translate to the second point.
    translate(30, 20, -10);
  
    // Draw the bottom-right sphere.
    sphere(10);
}
