// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(1000,600); //bakgrunnur
    background(250,0,250);
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
    fill(204,255,255)
    rect(70,252,350,15);
    //texti 2 og rétthyrningur utan um hann
    fill(71,206,188)
    stroke(250,0,0)
    rect(280,355,550,140);
    fill(0)
    textSize(75);
    text("Góðann daginn",300,450);


}
