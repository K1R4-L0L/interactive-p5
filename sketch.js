//custom variables for y-coordinate of sun & horizon
let sunHeight;
let horizon = 200;
function setup() {
  createCanvas(1500,700);
}
function draw() {
  background(0);
 
  //sun follows y-coordinate of mouse
  sunHeight = mouseY;

  //sun
  fill("yellow");
  circle(200, sunHeight, 100);


  // draw line for horizon
  stroke('green');
  line(0,horizon,400,horizon);
}