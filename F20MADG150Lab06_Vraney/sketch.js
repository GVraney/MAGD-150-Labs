//I start with declaring my variables 
var radius = 40;
var x = -radius;
var x =110
var speed = 4; //this is a float point. It changes effects the speed that our ellipse or "pacman" will travel across the screen.
var direction = 1;
var posX, posY, sizeX, sizeY;
var c;
var theta = 0;
var r = 0.0;



function setup() {
  createCanvas(600, 300);
  colorMode(HSB);
  fill(55, 69, 100);
  ellipseMode(RADIUS);
  posX= (0, height/2);
  posY= (width, height/2);
  sizeX=10;
  sizeY=10;
}

function draw() {
  colorMode(HSB);
  background(226, 100, 61);
  
  push();
  translate(width/2, height/2);
  noFill();
  noStroke();
  ellipse(0, 0, 64, 64);
  //I kinda won't it to appear like their are ghost going around the center of my pacman so that's why I made the ellipse pretty much invisible.
  
  rotate(theta);
  translate(100, 0);
  fill(169, 96, 100);
  ellipse(0, 0, 32, 32); //this is my "ghost"
  
  rotate(-theta*4);
  fill(0);
  ellipse(0, 0, 6, 6); //this is one of my ghost eyes, its roatating in place.
  
  rotate(theta*2);
  translate(24, 0);
  fill(0);
  ellipse(0, 0, 6, 6); //this is my other ghosts eye its roating inside the main ellipse to give the effect of its eyes following the pacman. :)
  pop();


  theta += 0.01;
  
  randomizePos();
  colorize();
  pelletDisplay();
  

  x += speed * direction; //Increase the value of X.
  if ((x > width-radius) || (x < radius)){
    direction = -direction; //This flips the direction the ellipse will move.
  }
  if (direction == 1){
      arc(x, 150 , radius, radius, 0.52, 5.76);//ellipse faces right also I have my Y at 150 so its in the middle of my canvas :)
   } else {
     arc(x, 150 , radius, radius, 3.67, 8.9); //ellipse faces left
   }


function randomizePos(){
 posX= round(random(width));
  posY= round(random(height));
  //make the pellets appear at random widths and heights from the center distance. I was trying to get them to only randomize on a middle line but I couldn't figure out how to do it.
}

function colorize(){
  c = round(random(255));
  //changes the colors of the ellipse between 0 and 255 so all the pellets will be diffrent gray scales.
}

function pelletDisplay(){
  push();
  fill(c);
  ellipse(posX, posY, sizeX, sizeY); //creating the pellets on the canvas.
  pop();
}
  
  push();
    translate(width/2, height/2); //puts it in the middle of the canvas.

  scale(r); 
 fill(355, 96, 100)
  text('GAME OVER', -33, 0);
  

  // Increase the scale variable
  r += 0.2;

  // Retstart r and return it 2 zero if it becomes greater than 20
  if (r > 20) {
    r = 0;
  }
  pop();
}