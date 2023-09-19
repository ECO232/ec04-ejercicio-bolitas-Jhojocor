let posicionesX = [];
let posicionesY = [];
let canalesR = [];
let canalesG = [];
let canalesB = [];

function setup() {
  createCanvas(800, 400);
  noStroke();
  cargarDatosLocalStorage();
}

function draw() {
  background(220);
  for (let index = 0; index < posicionesX.length; index++) {
    fill(canalesR[index], canalesG[index], canalesB[index]);
    ellipse(posicionesX[index], posicionesY[index], 30, 30);
  }
}

function mousePressed() {
  posicionesX.push(mouseX);
  posicionesY.push(mouseY);
  canalesR.push(random(0, 255));
  canalesG.push(random(0, 255));
  canalesB.push(random(0, 225));
  guardarDatosLocalStorage();
}

function guardarDatosLocalStorage() {
  const datos = {
    posicionesX: posicionesX,
    posicionesY: posicionesY,
    canalesR: canalesR,
    canalesG: canalesG,
    canalesB: canalesB,
  };

  localStorage.setItem('bolasData', JSON.stringify(datos));
}

function cargarDatosLocalStorage() {
  const datosJSON = localStorage.getItem('bolasData');

  if (datosJSON) {
    const datos = JSON.parse(datosJSON);
    posicionesX = datos.posicionesX;
    posicionesY = datos.posicionesY;
    canalesR = datos.canalesR;
    canalesG = datos.canalesG;
    canalesB = datos.canalesB;
  }
}
