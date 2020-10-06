let pokemon = [{
  name: "pikachu",
  color: "yellow"
}, {
  name:"mimikyu",
  color: "light yellow"
}, {
  name: "gengar",
  color: "purple"
}, {
  name: "mew",
  color: "pink"
}, {
  name: "lugia",
  color: "white"
}];

let randomIndex;
let animating = false;
let pokemonster = [];

var r;
var g;
var b;
var a;

function preload(){
  for(let i = 0; i <= 15; i++){
    pokemonster[i] = loadImage(`assets/
      pokemon_${i}.png`)
  }


}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("☟ Click to randomize ☟", 150, 300);

  // setTimeout(changeBackground, 1000);


  //console.log(pokemon.length);
  // console.log(pokemon[int(random(pokemon.length))]);

  // console.log(pokemon[randomIndex].name);


}

function draw() {

  r = random(255);
  g = random(100, 255);
  b = random(255);
  a = random(100, 255);

  if(animating == true){
    fill(r, g, b, a);
    stroke(random(255));
    square(random(width), random(height), random(50, 200));
    ellipse(random(width), random(height), random(50, 200));
  }
}
//
// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//     console.log(counter)
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 1000);
// } else {
// }
// }

function randomizer(){
  animating = false;

  if (pokemon[0]){
    background(random(200, 255));
    randomIndex = int(random(pokemon.length))
    text(`${pokemon[randomIndex].name}'s favorite color
    is
    ${pokemon[randomIndex].color}`, 180, 300);
    pokemon.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 225, 300);
  }
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer, 2000);


  }
