let img;
let color = 0;



function preload() {
  img = loadImage('assets/downtown.png');
}

function setup() {
  createCanvas(900, 700);
  background("lightpink");
  image(img, 30, 30);

}

function draw() {
  if (mouseIsPressed){
      stroke(color);
      strokeWeight(10);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }

}
  function mousePressed() {
    if (mouseY < 700) {
      color = get(mouseX, mouseY);
    }
  }



function keyTyped() {
  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'c'){
    clear();
  }
  return false;
}
