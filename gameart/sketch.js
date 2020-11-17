'use strict';

let monya;
let dImg;
let gImg;
let bImg;
let state = 'title';
let cnv;
let w = 800;
let h = 450;
let button;

let mouses = [];

function preload(){
    dImg = loadImage('assets/esami.png');
    gImg = loadImage('assets/monya.png');
    bImg = loadImage('assets/bg.png');
}
function setup(){
  cnv = createCanvas(w, h);
  monya = new Monya();
}

function keyPressed(){
  if(key == ' '){
    monya.jump();
    console.log("jump!!");
  }
}

function draw(){

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
      case 'level 1':
        level1();
        cnv.mouseClicked(level1MouseClicked);
        break;
  }


}

function reload() {
   window.location.reload(true);
}

function title() {
  background(0);
  textSize(40);
  fill(255);
  textAlign(CENTER);
  text('🐭 Do Not Step on Mice 🐭', w / 2, h / 2);

  textSize(30);
  text('Click anywhere to start', 400, 300);
}

function titleMouseClicked() {
  state = 'level 1'
}

function level1MouseClicked() {
}

function level1() {
  if (random(1) < 0.007){
    mouses.push(new Mouse());
  }

  background(bImg);
  for (let e of mouses){
    e.move();
    e.show();
    if (monya.hits(e)) {
      textSize(80);
      background(0);
      fill(255);
      text('GAME OVER', w / 2, h / 2);

      console.log('game over');
      noLoop();
      button = createButton('Try Again?');
      button.position(530, 470);
      button.mousePressed(reload);
    }
  }
  monya.show();
  monya.move();
}
