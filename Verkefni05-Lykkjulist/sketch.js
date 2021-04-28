// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(1500,900);
  background(255,255,0);
  noStroke();
  frameRate(2);
  colorMode(HSB);
}
//kassar
function draw() {
  for(var x = 400; x < 1030; x = x+30){
    for(var y=200; y < 600; y = y+30){
      fill(random(30, 100));
      rect(x,y, 30,30);
  }
  }
//glæru hringirnir
  for(var x = 400; x < 1090; x = x+90){
    for(var y=200; y < 630; y = y+30){
      ellipse(x,y,45,50);
      noFill();
      stroke(255,0,0)

  }
  }
  //lituðu hringirnir
  for(var x = 400; x < 1044; x = x+22){
    for(var y=200; y < 660; y = y+60){
      fill(random(0,360),40,150);
      ellipse(x,y, 30,15);
	}
  }
}
