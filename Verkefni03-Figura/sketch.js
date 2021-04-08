// Hér kemur kóðinn þinn:
var bukur = 150;

function setup() {
  createCanvas(1000,600);
  rectMode(CENTER);
}
function draw() {
  background(122,126,170);
  // Teiknum búkinn
  fill(236,36,94);
  ellipse(mouseX,mouseY,200,150,bukur);
  // Teiknum nefið
  fill(255);
  ellipse(mouseX - 1/bukur,mouseY + 15, 100,80);
  // Teiknum augun
  fill(100);
  ellipse (mouseX - 20 - 1/bukur,mouseY + 20 , 15,30);
  ellipse (mouseX + 20 - 1/bukur,mouseY + 20, 15,30);

}

function mousePressed() {
	bukur = random (150,150);
}

// Teiknum fæturna
line (mouseX - 20, mouseY + bukur/2, mouseX - 20, mouseY + bukur/2 + 50);
line (mouseX + 20, mouseY + bukur/2, mouseX + 20, mouseY + bukur/2 + 50);
