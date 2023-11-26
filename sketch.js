var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  //canvas.style('z-index', '-1');
  //background(220);
}

function draw() {
  if (mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
