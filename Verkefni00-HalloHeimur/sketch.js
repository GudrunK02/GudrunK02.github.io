// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(1500,800); //bakgrunnur
    background(102,178,255);
    //texti 1
    textSize(50);
    fill(0)
    text("Halló heimur",100,250);
    //hringir og rétthyrningar
    fill(0,0,200);
    ellipse(100,100,100,100);
    fill(250,0,0)
    ellipse(100,400,70,70);
    fill(0,250,0)
    ellipse(400,100,50,50);
    fill(208,245,27)
    rect(600,150,150,80);
    fill(102,0,51)
    rect(70,252,350,15);
    //texti 2 og rétthyrningur utan um hann
    fill(153,0,153)
    rect(280,355,550,140);
    stroke(0,255,255)
    fill(0)
    textSize(75);
    text("Góðan daginn",300,450);


}
