let array = [];
let backgroundColor = 200;



function setup() {
  createCanvas(400, 400);
  background(backgroundColor);

  strokeWeight(5);
  noFill();

}


function draw() {

  if (mouseIsPressed){
    backgroundColor -= 5;
    background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
    beginShape();
    for (let i = 0; i < array.length; i++){
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();

  }

}

function keyTyped() {

  // console.log(`key ${key} is being typed`)

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    background(255);

    beginShape();
    for (let i = 0; i < array.length; i++){
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();



    line(array[1][0], array[1][1], array[2][0], array[2][1]);
  }
  return false;

}

function mousePressed(){
  array = [];
  backgroundColor = 255;


}
