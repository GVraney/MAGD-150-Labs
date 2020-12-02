let img;//car for image that will be displayed on the box
let pack;//will be loading in a model so this is the var for that.
//sliders control the first 6 parameters of camera()
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;
let table;

function preload() {
  pack = loadModel('Backpack.obj');//loading in the model for use  
  table=loadTable("Num_DATA.csv");
}

function setup() {
  createCanvas(600, 500, WEBGL);
  //WEBGL uses Open GL and takes advantage of external GPUs to render 3-D objects.
  img = loadImage('Fine.jpg');
  //create sliders
  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }
    print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  print(table.getColumn('name'));
  //["Goat", "Leopard", "Zebra"]

  //cycle through the table
  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));}
}

function draw() {
  background(100);
  push();
  
  let locX = mouseX - height / 2;//light will follow mouse in x
  let locY = mouseY - width / 2; //light will follow mouse in y

  ambientLight(80, 80, 80);//size of ambient lighting
  pointLight(255, 255, 255, locX, locY, 100); //light will show depending on the position of the mouse.
  
push();
    translate(-200, -100 , -80);//location of model on the canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(4);
  texture(img);//texture for model
  model(pack);
  pop();
  //Cube created using primitives, pushes and pop as to not mess with the other code
  translate(20,60 , 0);//location of cube on the canvas
  push();
  rotateZ(frameCount * 0.01); //these rotate the box in x, y, z directions every 0.01 frame count.
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);//this textures the box with the image Fine.jpg
  box(100, 100, 100); //size of the box/cube on the canvas
  pop();
  
   // assigning sliders' value to each parameters
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

}