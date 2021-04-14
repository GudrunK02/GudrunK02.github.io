// Hér kemur kóðinn þinn:
var bukur = 200;
var nasir = 20;
var augasteinn1 = 46
var augasteinn2 = 54
var munnurX = 60
var munnurY = 15

function setup() {
  createCanvas(1000,600);
  rectMode(CENTER);
}
function draw() {
  background(122,126,170);
  noStroke()
  // Teiknum búkinn
  fill(255,153,153);
  ellipse(mouseX,mouseY,250,220);
  // Teiknum nefið
  fill(255,204,204);
  ellipse(mouseX - 1/bukur,mouseY + 25, 110,90);
  // Teiknum nasir
  fill(100);
  ellipse (mouseX - 20 - 1/bukur,mouseY + 25,nasir,nasir);
  ellipse (mouseX + 20 - 1/bukur,mouseY + 25,nasir,nasir);
  // Teiknum augu
  fill(100);
  ellipse (mouseX - 45 - 1/bukur,mouseY - 40 , 30,40);
  ellipse (mouseX + 55 - 1/bukur,mouseY - 40, 30,40);
  // Teiknum augasteina
  fill(255);
  ellipse (mouseX - augasteinn1 - 1/bukur,mouseY - 40 - 1/bukur,11,11);
  ellipse (mouseX + augasteinn2 - 1/bukur,mouseY - 40 - 1/bukur,11,11);
  // Teiknum eyru
  fill(255,153,153)
  triangle(mouseX - 110- 1/bukur,mouseY - 30- 1/bukur,mouseX-50- 1/bukur,mouseY-100- 1/bukur,mouseX-120- 1/bukur,mouseY-130- 1/bukur)
  triangle(mouseX + 110 - 1/bukur,mouseY - 30 - 1/bukur,mouseX+50- 1/bukur,mouseY-100- 1/bukur,mouseX+120- 1/bukur,mouseY-130- 1/bukur)
    //Innri eyru
  fill(255,204,204)
  triangle(mouseX-100-1/bukur,mouseY-70-1/bukur,mouseX-70-1/bukur,mouseY-95-1/bukur,mouseX-105-1/bukur,mouseY-110- 1/bukur)
  triangle(mouseX+100-1/bukur,mouseY-70-1/bukur,mouseX+70-1/bukur,mouseY-95-1/bukur,mouseX+105-1/bukur,mouseY-110- 1/bukur)
    //Teiknum munn
    fill(100)
  arc(mouseX -1/bukur,mouseY -1/bukur +80 ,munnurX,munnurY,TWO_PI,PI)

}

function mousePressed() {
  nasir = random (15,25);
  augasteinn1 = random (38,52)
  augasteinn2 = random (47,61)
  munnurX = random (60,80)
  munnurY = random (15,30)
}
