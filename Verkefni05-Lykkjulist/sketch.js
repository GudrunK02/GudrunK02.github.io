// Hér kemur kóðinn þinn:
var stepSize = 20;

function setup() {
  createCanvas(1000,600);
  background(255, 0, 230);
  strokeWeight(2);
}

function draw(){
  for(var y = 80; y < height; y = y + stepSize) {
      line(0, y, width, y);
  }
}
