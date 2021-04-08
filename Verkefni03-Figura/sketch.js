// Hér kemur kóðinn þinn:
var bukur = 200;

function setup() {
  createCanvas(1000,600);
  rectMode(CENTER);
}
function draw() {
  background(122,126,170);
  // Teiknum búkinn
  fill(236,36,94);
  ellipse(mouseX,mouseY,250,220,bukur);
  // Teiknum nefið
  fill(255);
  ellipse(mouseX - 1/bukur,mouseY + 25, 110,90);
  // Teiknum nasir
  fill(100);
  ellipse (mouseX - 20 - 1/bukur,mouseY + 25 , 20,20);
  ellipse (mouseX + 20 - 1/bukur,mouseY + 25, 20,20);
  // Teiknum augu
  fill(100);
  ellipse (mouseX - 45 - 1/bukur,mouseY - 40 , 30,40);
  ellipse (mouseX + 55 - 1/bukur,mouseY - 40, 30,40);
  // Teiknum augasteina
  fill(255);
  ellipse (mouseX - 51 - 1/bukur,mouseY - 46 , 9,9);
  ellipse (mouseX + 49 - 1/bukur,mouseY - 46, 9,9);
  // Teiknum eyru
  stroke(255,0,0)
  triangle(mouseX - 51 - 1/bukur,mouseY - 46 , 200)
  triangle(mouseX + 49 - 1/bukur,mouseY - 46, 200)

}

function mousePressed() {
	bukur = random (200,200);
}

// Teiknum fæturna
line (mouseX - 20, mouseY + bukur/2, mouseX - 20, mouseY + bukur/2 + 50);
line (mouseX + 20, mouseY + bukur/2, mouseX + 20, mouseY + bukur/2 + 50);
