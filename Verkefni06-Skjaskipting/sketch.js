// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(1440,750);
  background(250,150,250);
}

function keyPressed() {
  if(keyCode == 32){
background(250,150,250);

    }
  }
  //bláir hringir
function draw() {
  if(mouseX < width/2 && mouseY < height/2 && !mouseIsPressed){
  	fill(66,135,245);
    ellipse(mouseX, mouseY, 50, 50);
  }
//rauðir kassar
   if(mouseX > width/2 && mouseY < height/2 && !mouseIsPressed){
  	fill(232,58,23);
    for(var j = 1; j< 50;j = j+1) {
      rect(mouseX,mouseY, 50, 50);
    }
  }
  //bláir kassar
   if(mouseX > width/2 && mouseY > height/2 && !mouseIsPressed){
  	fill(66,135,245);
    for(var j = 1; j< 50;j = j+1) {
      rect(mouseX,mouseY, 50, 50);
   }
  }
  //rauðir hringir
  if(mouseX < width/2 && mouseY > height/2 && !mouseIsPressed){
  	fill(232,58,23);
    ellipse(mouseX,mouseY,50,50);
   }
  }
