let array = [];


function setup() {
  createCanvas(400, 400);
  background(225);

  strokeWeight(5);
  noFill();

}


function draw() {

  if (mouseIsPressed){
    // stroke(map(mouseX, 0, 600, 0, 255, true))
    // // line(width - mouseX, height - mouseY, width -pmouseX, height - pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(0);
    array.push([mouseX, mouseY]);
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
    for (let i = 0; i < array.length - 1; i++){
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();


    line(array[1][0], array[1][1], array[2][0], array[2][1]);
  }
  return false;

}
