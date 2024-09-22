function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220, 150, 180);

  fill("cornflowerblue");
  strokeWeight(20)
  stroke("white")
  ellipse(500, 500, 800);

  fill("white")
  ellipse(300, 450, 50)
  ellipse(700, 450, 50)

  noFill()
  arc(500, 670, 600, 300, PI, 0);
}
