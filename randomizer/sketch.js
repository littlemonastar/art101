let dream = [{
  where: "Hogwarts",
  do: "invent a special potion together"
}, {
  where: "New York",
  do: "go drink together and talk about life"
}, {
  where: "Space",
  do: "go trip together on a luxury liner"
}, {
  where: "London",
  do: "fly on a broomstick together"
}, {
  where: "Portogal",
  do: "go watch a world cup together"
}, {
  where: "a park",
  do: "cook lunch box together and eat"
}, {
  where: "Disney land",
  do: "explore the island together"
}, {
  where: "Las Vegas",
  do: "live it up in the night club"
}];


let amt;
let startColor;
let newColor;

let randomIndex;
let animating = false
let character = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;


function preload() {
  for (let i = 0; i <= 7; i++) {
    character[i] = loadImage(`assets/character_${i}.png`)
  }
}


function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background("#d7b1fc");
  // startColor = color(255,255,255);
  // newColor = color(random(255),random(255),random(255));
  // amt = 0;
  // background(startColor);
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLD);
  text("FANTASIZER", 300, 300);
  fill(0, 10, 30);
  // button = createButton("what is your story tonight?");
  startRandomizerButton = select('#randButton');
  startRandomizerButton.mousePressed(buttonPressed);

  // addMoreButton = select('#addMoreButton');
  // addMoreButton.mousePressed(addAnotherInput);

  // button.style("padding", "15px");
  // button.style("background-color", "#f8e6ff");
  // button.class("randomizerButton");

// for (let i = 0; i < 3; i++) {
//   nameInputs.push(createInput());
//   nameInputs[nameInputs.length -
//     1].parent("#inputFields");
// }
}

function draw() {

  if (animating == true) {
    clear();
    image(character[imageCounter], width / 5, height / 5);
  }
  if (imageCounter < dream.length - 1){
    imageCounter++;
  } else {
  imageCounter = 0;
  }

}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -
    1].parent("#inputFields")

}


function randomizer() {
  animating = false;
  if (dream[0]) {
    clear();
    randomIndex = int(random(dream.length))
    image(random(character), width / 3, height / 4);
    text(`You will
      ${dream[randomIndex].do} with` , 250, 100);
    text(`In ${dream[randomIndex].where}`, 200, 500);
    dream.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("GO SLEEP NOW", 225, 300);
  }
}

function buttonPressed() {
  if(firstTime){

  for (let i = 0; i < nameInputs,length; i++){
    dream.push(nameInputs[i].value());
  }
  firstTime = false;
}

  animating = true;
  setTimeout(randomizer, 1500);
}
