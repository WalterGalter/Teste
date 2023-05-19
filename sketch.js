function setup() {
  createCanvas(400, 400);
  background("BLACK");
}

function draw() {
  
  stroke("white");
  fill("red");
  if(mouseIsPressed){rect (mouseX, mouseY, 20, 35)};
}
