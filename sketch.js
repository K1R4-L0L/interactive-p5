//custom variables for y-coordinate of sun & horizon
let sunHeight;
let horizon = 350;
let moonHeight;
function setup() {
  createCanvas(1500, 700);
 
}
function draw() {
  background(0);
 
  //sun follows y-coordinate of mouse
  sunHeight = mouseY;


   //light blue background if sun is above horizon
  if(sunHeight < horizon){ //check if it is daytime
     background("lightblue");
  } else {
    background("black")
sunHeight= horizon += 5;

  }
  //sun
  fill("yellow");
  circle(200, sunHeight, 100);


  // draw line for horizon
  stroke('black');
  line(0,horizon,1600,horizon);
}

//  translate(25, 0);