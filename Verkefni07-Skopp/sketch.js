// Hér kemur kóðinn þinn:
var boltiX = 100;
var boltiY = 100;
var hradiX = 0;
var hradiY = 0;
var boltiStaerd = 60;
var stig = 0;
var spadiBreidd = 200;
var spadiThykkt = 25;
var spadiY;

function setup() {
	createCanvas(1440,743,);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}
function keyPressed() {
	if(keyCode == 32){
		stig = 0;
		boltiY = 100;
		boltiX = 100;
		boltiStaerd = 60;
		spadiBreidd = 200;
		hradiX = 5;
		hradiY = -6;
}
}

function draw() {
  background(250,200,250);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn vinstra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  // Athuga hvort boltinn snertir vegginn hægra megin:
   if ((boltiX < boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
  // Athuga hvort bolti snertir spaða:
  if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = hradiY * -1;
    stig = stig+1
    hradiX = hradiX *1.02
		boltiStaerd = boltiStaerd - 0.8
		spadiBreidd = spadiBreidd -2
  }
	if(boltiY > height + 40){
	stig = 0;
	boltiY = 100;
	boltiX = 100;
	boltiStaerd = 60;
	spadiBreidd = 200;
	hradiX = 0;
	hradiY = 0;
	}



	// Teikna boltann
  fill(236,36,94);
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(3,123,227);
  rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(mouseX, spadiY, 10,10);
	// Teikna stigin
  fill(0);
  text("Stig: " + stig,10,20);
}
