var x = [-150,100];
let cloudz1; //class var
let cloudz2; //creating a second object cloud

function setup() {
  createCanvas(600, 400);
  colorMode(HSB) //this is the color mode i prefer when working, I find it easier to use.
   noStroke(); //no stroke on the array 
    print (x.length); //prints the length of the array to the console
  cloudz1 = new Cloudz(); //connects the var to the class file.
  cloudz2 = new Cloudz();
}

function draw() {
  background(195, 29, 100); //A sky blue was chosen for the reason that I want my canvas to act as the sky.
  
  cloudz1.move();//connects to the Cloudz class move function
  cloudz1.draw();//connects to the Cloudz class draw function
  cloudz2.move();
  cloudz2.draw();
  
  x[0] += 0.9;
  x[1] += 0.7; //the speed of which the circle clouds will move across the screen.
  
  
  circle(x[0], 200,80,80,0.52, 5.76); //size and location of the cricle moving on the array
  circle(x[1], 300,70,70,0.52, 5.76);
  
  push(); //so the color does not fill the background clouds
  fill(44, 82, 100);
  noStroke();
  ellipse(80, 50, 200, 200); //The sun :)
  pop();
  fill(142, 3, 99);//cloud color
  noStroke();
  ellipse(300, 300, 80, 80);//Cloud chunck 1
  ellipse(350, 350, 90, 90);//Cloud chunck 1
  ellipse(370, 300, 70, 70);//cloud chunck 1
  ellipse(400, 100, 80, 80);//Cloud chunck 2
  ellipse(360, 150, 90, 90);//Cloud chunck 2
  ellipse(370, 100, 70, 70);//cloud chunck 2
}