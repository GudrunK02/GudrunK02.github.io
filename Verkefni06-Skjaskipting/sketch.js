// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(800,800);
  frameRate(5);
}

function draw() {
  background(255,200,0);
  if(mouseX < width/2 && mouseY < height/2){
  	fill(94,36,236);
    for(var i = 1; i< 50;i = i+1) {
      ellipse(random(width/2), random(height/2), random(30), random(50));
    }
  }
   if(mouseX > width/2 && mouseY < height/2){
  	fill(236,36,94);
    for(var j = 1; j< 50;j = j+1) {
      rect(random(width/2,width),random(height/2), random(30), random(30));
    }
  }
   if(mouseX > width/2 && mouseY > height/2){
  	fill(94,36,236);
    for(var j = 1; j< 50;j = j+1) {
      rect(random(width/2,width),random(height/2,height), random(30), random(30));
   }
  }
  if(mouseX < width/2 && mouseY > height/2){
  	fill(236,36,94);
    for(var j = 1; j< 50;j = j+1) {
      ellipse(random(width/2),random(height/2,height), random(30), random(30));
   }
  }
}
