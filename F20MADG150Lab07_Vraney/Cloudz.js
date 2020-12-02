class Cloudz{ //creating and stating the class
  
  constructor(){ //listing the var's 
    
var centerX, centerY, offset1, offset2; 
    colorMode(HSB);
    
this.centerX = random(0,width); //keeps the clouds within the canvas size
this.centerY = random(0,height); //keeps the clouds within the canvas size
this.offset1 = 15;
this.offset2 = 15;
  } 

move(){ //creates the random movement of the shape 
  this.centerX += round(random(-10, 10));
  this.centerY += round(random(-10, 10));
}

draw(){ //creating the whole cloud
  ellipseMode(CENTER);
  fill(120, 3, 99);//cloud color
  noStroke(); //no stroke for the cloud
  circle(this.centerX, this.centerY, 100, 20);
  circle(this.centerX+this.offset1, this.centerY+this.offset2, 90, 100);
  circle(this.centerX-this.offset2, this.centerY+this.offset2, 80, 80);
}
  
  }