//Don't pull on kitty's tail
//don't pull kitty's tail or he'll gets so mad, his eyes will
//turn red, he'll hiss and the sky will turn black

//wall
function setup() {
  createCanvas(900, 1100);

  //Tail grab
  startX = 530;
  startY = 700;

}

function draw() {
  background("Gold");
  textSize(40)
  text("Do not pull kitty's tail. It's very rude.", 150, 100);
 


  push();
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

  //tail grab
  controlX = mouseX; 
  controlY = mouseY; 

  //tail
  stroke("black");
  strokeWeight(22);
  noFill();
  bezier(startX, startY, 530, 650, 500, 850, controlX, controlY);
  
  pop();
}
