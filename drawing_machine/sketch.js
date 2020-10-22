let array = [];
let backgroundColor = 200;
let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

}


function draw() {

  if (mouseIsPressed){

    background(220, 50, 133, 5);
    strokeWeight(strokeWidth);

    noiseOffset += 0.05;
    strokeWidth = noise(noiseOffset) * 100;

    // line(mouseX, mouseY, pmouseX, pmouseY);
    // array.push([mouseX, mouseY]);
    // beginShape();
    // for (let i = 0; i < array.length; i++){
    //   // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1])
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    }


}

function keyTyped() {

  // console.log(`key ${key} is being typed`)

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c'){
    //clear the image
    clear();
  }
  return false;

}

function mousePressed(){
  array = [];
  backgroundColor = 255;


}
