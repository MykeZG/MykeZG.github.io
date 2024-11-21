let posX = [];
let posY = [];
// Numero de posiciones en X
let nPosX = 50;

let rW = 3;

function setup() {
  let miCanvas = createCanvas(windowWidth, windowHeight);
  miCanvas.parent("#my-p5-sketch");
}

function draw() {
  // background("rgba(255,255,255,0.2)");
  background(0);
  posX[0] = mouseX;
  posY[0] = mouseY;
  // for (let i = 0; i < nPosX; i++) {
  // print(i);
  // Mouse Array
  for (let i = nPosX - 1; i > 0; i--) {
    posX[i] = posX[i - 1];
    posY[i] = posY[i - 1];
  }
  for (let i = nPosX - 1; i > 0; i--) {
    posX[i] += random(-rW, rW);
    posY[i] += random(-rW);
  }

  fill(255, 50, 0);
  for (let i = 0; i < posX.length - 1; i++) {
    // strokeWeight(nPosX - i);
    strokeWeight(i);
    stroke("#ffffff");
    // circle(posX[i], posY[i], 30);
    line(posX[i], posY[i], posX[i + 1], posY[i + 1]);
  }
}
