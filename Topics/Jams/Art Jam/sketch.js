//Don't pull on kitty's tail
//don't pull kitty's tail or he'll gets so mad, his eyes will
//turn red, he'll hiss and the sky will turn black
 

//tail grab
  let endY = 900;
  let endX = 530;
  let defaultEndY = 900;
  let defaultEndX = 530;

  let eyes = "GreenYellow";
  let angryEyes = "Red";
  let defaultEyes = "GreenYellow";

  let windowColor = "SkyBlue";
  let apocalypseWindow = "Maroon";
  let defaultWindow = "SkyBlue";

  let lerpAmount = 0;

function setup() {
//wall 
  createCanvas(900, 1100);
}

function draw() {
  background("Gold");
  textSize(40)
  text("Do not pull kitty's tail. Kitty will be mad.", 150, 100);

  push();
  //window
  stroke("white");
  strokeWeight(10);
  fill(windowColor);
  square(185, 150, 550)
  
  line(730, 420, 190, 420);
  line(460, 150, 460, 700);

  // window Apocalipse and eyes change
  if (mouseIsPressed 
    && (mouseX < 100 || mouseX > 800 || mouseY < 100 || mouseY > 1000)) {
    windowColor = apocalypseWindow;
    eyes = angryEyes;
  }
  else {
    windowColor = defaultWindow;
    eyes = defaultEyes;
  }
     

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
  fill(eyes);
  ellipse(430, 430, 30, 20);
  ellipse(475, 430, 30, 20);

  //Pupil
  stroke("black");
  strokeWeight(14);
  line(430, 420, 430, 440)
  line(475, 420, 475, 440)  
  //tail grab

  if (mouseIsPressed) {
    endX = mouseX
    endY = mouseY
  }
  else {
    endX = defaultEndX
    endY = defaultEndY 
  }

  //tail
  stroke("black");
  strokeWeight(22);
  noFill();
  bezier(530, 700, 530, 650, 500, 850, endX, endY);

  pop();
}
