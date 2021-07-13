let skull; //image
let x=0; //x coordinate
let y=0; //y coordinate
let rot=0; //rotation rate 
let ang=0;  //rotation angle
let red;
let blue;
let green;
let colorSwap=false;


function setup(){
let c = createCanvas(windowWidth,windowHeight);
c.parent('p5container')
skull = loadImage("skull.png");
skull.resize(100,125);
clear(); //clear background when program starts
red=random(0,255);
green=random(0,255);
blue=random(0,255);
}

function draw(){
  
  
    //if up key is pressed change angle of rotation
    if (keyCode == UP_ARROW){
    if (keyIsPressed==true) {
      ang+=1;
     }
 }
    
    
   //if down key is pressed change angle of rotation
      if (keyCode == DOWN_ARROW){
    if (keyIsPressed==true) {
      ang+=rot;
     }
  
 }
    push();
    
    
    if (mouseIsPressed){
    
    //draw rotating skull and move according to mouse position
    translate(mouseX,mouseY);
    rot+=cos(360)/PI*2;
    rotate(rot+ang);
     image(skull, x, y);
     colorSwap=false;
 
  } else {  
    colorSwap=true;
  }
  pop();
    
    if (colorSwap==true){
    //pick random color from cool side of color spectrum
    red=random(0,255);
    green=random(0,225);
    blue=random(200,255);

      //write new random color
    tint(red,green,blue);
  }

  //clear if enter key is pressed
  if (keyCode==ENTER) {
    if (keyIsPressed==true){
      clear();
    }
 
}
}
 