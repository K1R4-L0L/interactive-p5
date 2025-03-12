let sunHeight;
let horizon = 350;
let moonHeight = 700;
let sunHasSet = false; // Track if the sun has set
let drawingCanvas; // Separate layer for drawing
let balls = []; 
let gravity = 0.3;

function setup() {
  createCanvas(1500, 700);
  colorMode(RGB); // RGB compatiblr 
  drawingCanvas = createGraphics(1500, 700); // Off-screen buffer for drawings
  drawingCanvas.clear(); // blank canvas
}

function draw() {
  // Set background based on sun's position
  if (!sunHasSet) {
    background("lightblue");
  } else {
    background("black");
    text('Hold to make custom stars', 50, 50); // permission for user to make custom stars 
    text('click to make bouncing balls (shooting stars) ');
  }

  // allows for free draw 
  image(drawingCanvas, 0, 0); 

  // Set width of drawing lines
  strokeWeight(3);

  // Sun follows y-coordinate of the mouse
  sunHeight = mouseY;

  // Check if the sun has set
  if (sunHeight >= horizon) {
    sunHasSet = true; 
  }

  // If sun is still in the sky, draw it
  if (!sunHasSet) {
    fill(255, 255, 0); // RGB Yellow color
    circle(200, sunHeight, 100);
  }

  // Allows for moon to rise
  if (sunHasSet && moonHeight > 200) {
    moonHeight -= 1;
  }

  // Draw the moon rising after sunset
  fill(169, 169, 169); // Grey color for the moon (RGB)
  arc(300, moonHeight, 80, 80, 0, PI + QUARTER_PI, PIE);

  // Draw the horizon
  stroke('black');
  line(0, horizon, width, horizon);

  // Update and display all balls
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

// Allow free drawing
function mouseDragged() {
  drawingCanvas.stroke(255, 255, 0); // yellow for stars
  drawingCanvas.strokeWeight(5);
  drawingCanvas.line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
  // Create a new ball object at mouse position
  let b = new Ball(mouseX, mouseY, 16); 
  balls.push(b); // Add the ball to the balls array
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ySpeed = 0; // Initial vertical speed
    this.gravity = 0.3; // Gravity strength
    this.bounceFactor = 0.9; // Bounce factor (damping)
  }

  update() {
    // Apply gravity (increase ySpeed downward)
    this.ySpeed += this.gravity;
    
    // Move the ball down
    this.y += this.ySpeed;

    // Check for bouncing on the ground
    if (this.y > height - this.radius) {
      this.y = height - this.radius; // Prevent ball from going below the canvas
      this.ySpeed *= -this.bounceFactor; // Bounce, with damping
    }
  }

  display() {
    fill(255, 255, 0); // Set the ball color to yellow (RGB Yellow)
    noStroke(); // Remove outline
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2); // Draw the ball
  }
}