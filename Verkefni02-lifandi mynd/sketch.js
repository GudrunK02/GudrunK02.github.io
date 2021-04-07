// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(1000,500); //bakgrunnur
    frameRate(0,8);

}

    function draw() {

    background(47,67,97);
      stroke(105,93,49);
      strokeWeight(25)
        fill(242,160,27)
    ellipse(150,270,110,110);
      strokeWeight(2)
      fill(30,20,20);
    triangle(200,300,0,500,400,500);
    triangle(900,250,600,500,1200,500);
      fill(255,0,0);
    ellipse(random(350,600),random(250,100), 30,30);
      fill(194,70,0);
    ellipse(random(350,600),random(250,100),35,25);
      fill(50,45,40);
    triangle(500,200,200,500,800,500);
      noStroke();
      fill(194,70,33);
    triangle(500,200,425,275,575,275);

}
