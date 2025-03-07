function setup() {
    //creates a canvas 600 pixels wide
    //and 400 pixels high
    createCanvas(1500, 700);
    strokeWeight(2);

    // Set color mode to hue-saturation-brightness (HSB)
    colorMode(HSB);
  
  }
  function draw() {

    //sky blue background
    background(135, 206, 235);
    //sun in top-right corner
    fill("yellow");
    circle(550, 50, 100);
   
    //grass on bottom half
    fill("green");
    rect(0, 200, 600, 200);
   
    //emojis
    textSize(75)
    text("🌸", 100, 250) //flower
      // Set width of the lines

}


function mouseDragged() {

    // Set screen reader accessible description
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }