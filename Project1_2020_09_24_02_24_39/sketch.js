let mic;
let x = 180;
let y = 240;
let xspeed = 1;
let yspeed = 4;
let r = 15;
let dot1;
let dot2;
let dot3;
let dot4;
let dot5;


function setup(){
  createCanvas(400, 400);
  stroke('#323D3A');
  strokeWeight(6)
  mic = new p5.AudioIn();
  mic.start();
  
  // angleMode(DEGREES);
  
  dot1 = new Dot(width * -0.3, height * 0.01, -50);
  dot2 = new Dot(width * 0.04, height * 0.04, -75);
  dot3 = new Dot(width * -0.6, height * 0.3, -75);
  dot4 = new Dot(width * 0.2, height * 0.5, -75);
  dot5 = new Dot(width * -0.6, height * 0.1, -50);
  console.log(dot1);
  
}


function draw() {
  background(0);
  
  dot1.display();
  dot2.display();
  dot3.display();
  dot4.display();
  dot5.display();

  
  dot1.move();
  dot2.move();
  dot3.move();
  dot4.move();
  dot5.move();
  
  drawBody();
  drawFace();
  drawEyebrows();
  drawEyes();
  drawEyeballs();
  drawMouth();
  drawLegs();
  drawHorn();
  drawTail();
  drawThorn();
  drawHeart();
  
  
  if(mouseIsPressed) {drawHorn();
  } else{drawHorn2();} 
  if(mouseIsPressed) {drawThorn();
  } else{drawThorn2();}
  if(mouseIsPressed) {drawTail();
  } else{drawTail2();}
  
  

 
}
  
function drawHeart() {
  fill('red');
  ellipse(x+10, y, r*2, r*2);
    x += xspeed;
    y += yspeed;
    if (x > 100 - r || x < 150) {
      xspeed = -xspeed;
    }
    if (y > 200 - r || y < 5) {
      yspeed = -yspeed;
    }
}


function drawBody() {
  fill('#3BFB89')
  rect (120, 150, 230, 180, 10);
}

  
function drawFace() {
  fill('#F4AEF1')
  square (50, 50, 160, 25, 25, 20, 20);
}


function drawEyebrows(){
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, height, 0);
  fill('#000000')
  rect(70, h-330, 30, 10);
  rect(145, h-330, 30, 10);
}
  
function drawEyes() {
  fill('#FFFFFF')
  ellipse (85, 110, 40, 40);
  ellipse (160, 110, 40, 40);
}
  
function drawEyeballs() {
  let x1 = map(mouseX, 0, width, 75, 95, true);
  let x2 = map(mouseX, 0, width, 150, 170, true);
  let y1 = map(mouseY,0, width, 120, 100, true);
  let y2 = map(mouseY,0, width, 120, 100, true);
  fill('#000000')
  ellipse (x1, y1, 20, 20);
  ellipse (x2, y2, 20, 20);
}

function drawMouth(){
  fill('#FFFFFF')
  line(90,170,70,150);
  line(110,150,90,170);
  line(110,150,130,170);
  line(130,170,150,150);
  line(150,150,170,170);
  line(170,170,190,150);
}

function drawLegs(){
  fill('#FF77D1')
  square (110, 330, 45, 25, 25, 10, 10);
  square (140, 330, 45, 25, 25, 10, 10);
  square (290, 330, 45, 25, 25, 10, 10);
  square (320, 330, 45, 25, 25, 10, 10);   
}
  
  
function drawTail(){
  fill('yellow')
  quad(345, 150, 380, 140, 380, 100, 370, 120);
}
function drawTail2(){
  fill('#BA4EFF')
  quad(345, 150, 380, 140, 380, 100, 370, 120);
}

  
function drawHorn(){ 
 fill('yellow')
 triangle(100, 50, 120, 10, 140, 50);
}
function drawHorn2(){ 
 fill('#A820FF')
 triangle(100, 50, 120, 10, 140, 50);
}

 
function drawThorn(){
  fill('yellow')
  triangle(220, 150, 235, 130, 250, 150);
  triangle(250, 150, 265, 130, 280, 150);
  triangle(280, 150, 295, 130, 310, 150);
  triangle(310, 150, 325, 130, 340, 150);
}
function drawThorn2(){
  fill('#D38EFF')
  triangle(220, 150, 235, 130, 250, 150);
  triangle(250, 150, 265, 130, 280, 150);
  triangle(280, 150, 295, 130, 310, 150);
  triangle(310, 150, 325, 130, 340, 150);
}

function drawDot(xPos, yPos, rotation){
  fill('yellow')
  push();
  translate(xPos, yPos);
  rotate(rotation);
  circle(width * 0.8, height * 0.001, height * 0.2);
  circle(width * 0.6, height * 0.004, height * 0.09);
  pop();
}


  

