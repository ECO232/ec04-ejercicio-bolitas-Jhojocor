let posicionesX = []
let posicionesY = []
let canalesR = []
let canalesG = []
let canalesB = []

function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  background(220);
  for(let index = 0; index < posicionesX.length; index++){
    fill(canalesR[index], canalesG[index], canalesB[index]);
    ellipse(posicionesX[index], posicionesY[index], 30, 30)
  }
}

function mousePressed(){
  posicionesX.push(mouseX)
  posicionesY.push(mouseY)
  canalesR.push(random(0,255))
  canalesG.push(random(0,255))
  canalesB.push(random(0,225))
}