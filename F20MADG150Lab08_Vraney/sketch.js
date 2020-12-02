let photo2;//declaring for the variables for the image files in the preload function.
let photo1
let img//var for final image being added to the poster
var lines = [];
var arial;
var pdf;//for the libray 
var count, fontSize, lineSpacing, margin;
headlines = [ //array for our moving text headline
  "Coming to cinema's never...", 
  "Because it's 2020 and they're all closed."];
var p; //with be another font variable
var f; // Global font variable
var x; // Horizontal location of the text array
var index = 0;

function preload() {
      f = loadFont("Movie Title_AH.ttf");//font for animated text
  photo1 = loadImage('Arson.jpg');//these are are burning fire images image one will load on the left and image 2 will load on the right.
  photo2 = loadImage('Arson.jpg');
  img = loadImage("cal.png");
    p = loadFont("American Captain.ttf");
lines = loadStrings("loremIpsum.txt");
  arial = loadFont("arial.ttf");
}

function setup() {
  createCanvas(400, 600, P2D); //vertical canvas for a move poster like effect.
  x = width;
   pdf = createPDF();
    pdf.beginRecord();
  push();
  count = lines.length;
  fontSize = 14
// selecting font
  textFont(arial);
// selecting font size, margin, leading, alignment  
  textSize(fontSize);
  lineSpacing = 2;
  margin = 10;
  textAlign(CENTER, BOTTOM);
  pop();
  //by the way I know my load string isn't perfect by anymeans but I do understand it's purpose. I actually really like how the filler text looks on the poster in the messed up format so I'm keeping it like it is becuase it looks better than the correct way on the poster. I really think it adds so the choatic but still fun mess i'm going for.
}

function draw() {
  
  background(0);
  fill(0);
  //image(img, 0, 0, width, height); //displays the image at the location on (0,0)
  
  push();
  photo2.filter(GRAY);//this makes image 2 gray scale.
  image(photo1, 0, 0);
  image(photo2, width / 2, 0);
  pop();
  
  push();
    image(photo1, 0, 0);
  tint(0, 153, 204, 126);//The blue transparent combined with the normla and gray scale image creates a cool 3D kind of effect.
  image(photo1, 50, 0);
  pop();
  
  // A for-loop can be used to display a number of lines.
 for (let i = 0; i < count; ++i) {
    text(lines[i], margin, margin + (fontSize + lineSpacing) * i);
  }
  print (margin+ "," + "," + fontSize + "," + lineSpacing)
  
  textFont(p);//raclling my title font from the preload
  textSize(150);//size of my title font
  fill(255);//color of mt title font

  // textAlign() sets the alignment for displaying text. It takes one argument: CENTER, LEFT, or RIGHT.
  textAlign(CENTER);//my text will be alligned at the center
  text("2020", width/2, 140);
  
  // Display headline at x location
  textFont(f, 5);
  textSize(40);//size of the animated text.
  textAlign (LEFT);

  // A specific String from the array is displayed according to the value of the "index" variable.
  text(headlines[index], x, height-20); 

  // Decrement x
  x = x - 3;

  // If x is less than the negative width, then it is off the screen
  // textWidth() is used to calculate the width of the current String.
  let w = textWidth(headlines[index]); 
  if (x < -w) {
    x = width;
    // index is incremented when the current String has left the screen in order to display a new String.
    index = (index + 1) % headlines.length;
  }
  
  image(img, 85, 200, 250, 250); //position of the cal image on the canvas.
  

}

function mousePressed(){
          pdf.save();
  
}