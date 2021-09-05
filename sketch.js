function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(0);
  mouseMove();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  mouse.colour.r = 255;
  mouse.colour.g = 255;
  mouse.colour.b = 255;
  mouseMove();
}

function mouseReleased() {
  mouse.colour.r = 150;
  mouse.colour.g = 150;
  mouse.colour.b = 150;
  mouseMove();
}

function mouseMove() {
  mouse.x = mouseX;
  if (mouse.x < mouse.size / 2) {
    mouse.x = mouse.size / 2;
  } else if (mouse.x > windowWidth - mouse.size / 2) {
    mouse.x = windowWidth - mouse.size / 2;
  }

  mouse.y = mouseY;
  if (mouse.y < mouse.size / 2) {
    mouse.y = mouse.size / 2;
  } else if (mouse.y > windowHeight - mouse.size / 2) {
    mouse.y = windowHeight - mouse.size / 2;
  }
  rectMode(CENTER);
  fill(color(mouse.colour.r,mouse.colour.g,mouse.colour.b));
  noStroke();
  rect(
    mouse.x,
    mouse.y,
    mouse.size,
    mouse.size
  );
}

class Mouse {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 10;
    this.colour = {
      r: 150,
      g: 150,
      b: 150, 
    }
  }
}

let mouse = new Mouse();