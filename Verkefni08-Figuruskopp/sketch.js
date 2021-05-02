var svinX = 10;
  var svinY = 10;
  var svinBukur = 100;
  var hradiX = 5;
  var hradiY = 3;
  var nasir = 20;
  var augasteinn1 = 46
  var augasteinn2 = 54
  var munnurX = 60
  var munnurY = 15

  function setup() {
    createCanvas(1450,750);
  }
  function draw() {
    background(122,126,170);
    noStroke()
    svinX = svinX + hradiX;
    svinY = svinY + hradiY;
    if (abs(svinX - width/2)> width/2){
      hradiX = -1*hradiX;
      svinBukur = random (50,200);
    }
    if (abs(svinY - height/2)> height/2){
      hradiY = -1*hradiY;
      svinBukur = random(0,360);
    }

    svin(svinX,svinY,svinBukur);
  }

  // Teiknar svin
  // með miðju í punktinum (x,y)
  // Bukur: stjórnar lengdinni á búknum
  function svin(x,y,bukur){
    rectMode(CENTER);
     // Teiknum eyru
  fill(255,153,153)
  triangle(x - 110- 1/bukur,y - 30- 1/bukur,x-50- 1/bukur,y-100- 1/bukur,x-120- 1/bukur,y-130- 1/bukur)
  triangle(x + 110 - 1/bukur,y - 30 - 1/bukur,x+50- 1/bukur,y-100- 1/bukur,x+120- 1/bukur,y-130- 1/bukur)
    // Teiknum búkinn
    fill(255,153,153);
  ellipse(x,y,250,220);
    // Teiknum nefið
    fill(255,204,204);
  ellipse(x - 1/bukur,y + 25, 110,90);
    // Teiknum nasir
  fill(100);
  ellipse (x - 20 - 1/bukur, y + 25,nasir,nasir);
  ellipse (x + 20 - 1/bukur, y + 25,nasir,nasir);
    // Teiknum augun
   fill(100);
  ellipse (x - 45 - 1/bukur,y - 40 , 30,40);
  ellipse (x + 55 - 1/bukur,y - 40, 30,40);
    // Teiknum augasteina
  fill(255);
  ellipse (x - augasteinn1 - 1/bukur,y - 40 - 1/bukur,11,11);
  ellipse (x + augasteinn2 - 1/bukur,y - 40 - 1/bukur,11,11);
    //Innri eyru
  fill(255,204,204)
  triangle(x-100-1/bukur,y-70-1/bukur,x-70-1/bukur,y-95-1/bukur,x-105-1/bukur,y-110- 1/bukur)
  triangle(x+100-1/bukur,y-70-1/bukur,x+70-1/bukur,y-95-1/bukur,x+105-1/bukur,y-110- 1/bukur)
  }
