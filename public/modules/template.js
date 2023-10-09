//
//  VARIABLES
//


//
//  ASSET LOAD
//

function preload() {

}

//
//  MAIN
//

function setup(){
  createCanvas(windowWidth, windowHeight); //TODO better way of ensuring scrollbars don't show up
  
  //layout
  imageMode(CENTER); //draws the image from center coordinates instead of corner
  textAlign(CENTER, BOTTOM); //aligns the text to the center horizontally, and to the bottom vertically
  textFont(font);
  textSize(sliderWidth/8); 
  noStroke();//removes the outline so the text isn't as thick
  colorMode(HSB);
  
} 

//
//  FUNCTIONS
//

function draw() {

}

//
//  MOUSE FUNCTIONS
//


//
//  SHOW FUNCTIONS
//


//
//  MISC FUNCTIONS
//
