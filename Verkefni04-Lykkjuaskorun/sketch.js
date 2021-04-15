// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(400,400);
    background(255,215,0);
  	fill(0);
    colorMode(HSB);
    frameRate(2);
  }

  function draw() {
    strokeWeight(2)
    for(var x = 10; x < width; x = x+20){
      fill(random(160,360),75,100);
    for(var i = -2; i < 20 ; i = i + 1) {
        ellipse(x, 50 + i*20, 15, 15);
      }
    }
  }
