function setup() {
  createCanvas(1280,720);
  background("BLACK");
}

function draw() {
  
  stroke("white");
  fill("red");
  if(mouseIsPressed){rect (mouseX, mouseY, 20, 35)};
}
