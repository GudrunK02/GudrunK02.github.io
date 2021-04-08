// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(1000,500); //bakgrunnur
    frameRate(0,9);

}

    function draw() {

    background(47,67,97);
      stroke(105,93,49);
      //sól
      strokeWeight(25)
        fill(242,160,27)
    ellipse(150,270,110,110);
    //fjöll
      strokeWeight(2)
      fill(30,20,20);
    triangle(200,300,0,500,400,500);
    triangle(900,250,600,500,1200,500);
    fill(50,45,40);
  triangle(500,200,200,500,800,500);
    //hraun
      fill(255,0,0);
    ellipse(random(360,600),random(240,100), 30,30);
      fill(194,70,0);
    ellipse(random(360,600),random(240,100),35,25);
      fill(170,0,0)
    rect(random(360,600),random(240,100),20,40);
    //hraun þríhyrningur
      noStroke();
      fill(194,70,33);
    triangle(500,200,425,275,575,275);

}
