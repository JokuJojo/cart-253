function setup() {
  createCanvas(900, 900);
}

function draw() {
  background("cornflowerblue");

  fill("gold")
  noStroke()
  ellipse(100, 900, 1120);
  fill("gold")
  ellipse(700, 1020, 1100);

  ellipse(100, 100, 200)

  fill("brown");
  triangle(600, 540, 500, 650, 430, 380);
  fill("yellow");
  triangle(500, 650, 300, 600, 430, 380);

}
