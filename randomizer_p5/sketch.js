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

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("☟ Click to randomize ☟", 120, 300);

  //console.log(pokemon.length);
  // console.log(pokemon[int(random(pokemon.length))]);

  // console.log(pokemon[randomIndex].name);


}

function draw() {
}

function mousePressed(){

  if (pokemon[0]){
    background(random(200, 255));
    randomIndex = int(random(pokemon.length))
    text(pokemon[randomIndex].name, 250, 300);
    pokemon.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 250, 300);
  }
  }
