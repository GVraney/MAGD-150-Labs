var rectX, rectY;      
var circleX, circleY;  
var rectSize = 40;     
var circleSize = 40;   
var rectColor, circleColor, baseColor;
var rectHighlight, circleHighlight;
var currentColor;
var rectOver = false;
var circleOver = false;


function setup() { 

  push();
  createCanvas(400, 400);
  rectColor = color(0);
  rectHighlight = color(51);
  circleColor = color(255);
  circleHighlight = color(204);
  baseColor = color(102);
  currentColor = baseColor;
  fill(255, 0, 0);
  circleX = (370);
  circleY = (365);
  rectX = (300);
  rectY = (345);
  ellipseMode(CENTER);
  pop();
  colorMode(HSB);
}
 
function draw() {

push();
  update(mouseX,mouseY);
    background(currentColor);
  noStroke();
    fill(45,54,63);
  rect(0,0,400,75);
  rect(0,0,20,400);
 rect(380,0,40,400);
  rect(0,330,400,75);
  pop();
  
for (var x=20; x< width; x+=20){
    var mx = mouseX/10;
    var offsetA = random(-mx, mx);
    var offsetB = random(-mx, mx);
    line(x+offsetA, 80, x-offsetB, 330);
  }
  
  fill(255, 0, 0);
   textSize(15);
text('ON', 360, 370);
  text('OFF', 305, 370);
  
  if (rectOver) {
    fill(rectHighlight);
  } else {
    noFill();
  }
  stroke(255);
  rect(rectX, rectY, rectSize, rectSize);
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    noFill();
  }
  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
}


function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    currentColor = circleColor;
  }
  if (rectOver) {
    currentColor = rectColor;
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
 
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
  
 
  
}

