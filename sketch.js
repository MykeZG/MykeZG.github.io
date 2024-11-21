function setup() {
  let miCanvas = createCanvas(windowWidth, windowHeight);
  miCanvas.parent("#my-p5-sketch");
}

function draw() {
  background(0);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
}

// }
// display (){

// }
