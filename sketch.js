let stand;
let stars;
let glass;
let lights; 
let hangar_hangardoor;
let metal;
let ship;
let shipglass;
let storage; 
let toolbox;
let tv;
let screen; 


function preload(){
  stand = loadModel('stand_ramp.obj', true);
  hangar_hangardoor = loadModel('hangar_hangar door.obj', true);
  lights = loadModel('lights.obj', true); 
  glass = loadModel('glass.obj', true);
  ship = loadModel('ship_metal.obj', true);
  shipglass = loadModel('ship_glass.obj', true); 
  storage = loadModel('storage.obj', true);
  toolbox = loadModel('toolbox.obj', true);
  tv = loadModel('tv set.obj', true);
  screen = loadModel('tv glass.obj', true);

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  metal = loadImage('metal_texture.jpg') ;
  stars = loadImage('stars.jpg');

}

function draw() {
  background(0);
   orbitControl();
  noStroke();
  
  //physical lights
 directionalLight(163, 243, 255,0.85, 2.95, 0);
   directionalLight(163, 243, 255,0.85, 0.95, 40);
  directionalLight(163, 243, 255,0.85, 0.95, -40);
   directionalLight(163, 243, 255,0.85, -2.95, 0);
  // pointLight(250, 290, 250, 80);

  //hangar_building
  push();
  rotateX(3);
  //rotateY(frameCount * 0.01);
   scale(7.5);
  texture(metal)
    shininess(1);
  model(hangar_hangardoor);
  pop();
  
  //lights
  push();
  rotateX(3);
  scale(7.2);
  emissiveMaterial(59, 247, 244);
  model(lights)
  pop();
  
  //stand
  translate(-185, 182, -25);
  push();
  rotateX(3)
  //translate(50, 20);
  fill(0, 0, 0,80);
  texture(metal);
  shininess(1);
  scale(4.38)
  model(stand);
  pop();
  
  //glass
  translate(166,-180,25);
  push();
  rotateX(3);
  fill(130, 255, 253 ,50)
  scale(7.3);
  model(glass);
  pop();
  
  //ship
  translate(-230, 70,0);
  push();
  rotateX(3);
  texture(metal);
  shininess(1);
  scale(2.5);
  model(ship);
  pop();     
  
  //shipglass
  translate(-215, -11,5);
  push();
  rotateX(3);
  fill(130, 255, 253 ,50)
  //rotateY(3);
  rotateZ(3.2)
  scale(-0.65);
  model(shipglass);
  pop();
  
 
  //storage/toolbox
  translate(400,70,0)
  push();
  rotateX(3);
  fill(101, 117, 93);
  shininess(1);
  scale(5);
  model(storage);
  pop();
  
  translate(500,45,0);
  push();
  rotateX(3)
  fill(31, 31, 31);
  shininess(1);
  scale(3.5);
  model(toolbox);
  pop();
  
   //tv/set
  translate(-90,-100,-320)
  push();
  rotateX(3);
  scale(0.2);
  texture(metal);
  model(tv);
  pop();
  
  translate(4,0,10);
  push();
  rotateX(3);
  scale(0.15);
  emissiveMaterial(59, 247, 244, 90);
  model(screen);
  pop();
  
  //stars
  push();
  texture(stars)
  sphere(2500);
  pop();
  
  
  
}
