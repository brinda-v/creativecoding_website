let cols = 8;
let keyColors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // set up 
  for (let x = 0; x < cols; x++) {
    keyColors[x] = 255;
    
  }
}

function draw() {
  background("black");

  // adding text, making it an appropriate size and color
  // I struggled with positioning it in the center
  fill(255)
  textSize(20)
  let s = 'click the keys for a c major chord';
  let w = textWidth(s); 
  text(s,(width/2)-w, (height/2)-50);
  
  for (let x = 0; x < cols; x++) {
    
    // if a key is pressed, it will check the position and depending on  the position it will update to green or red 
    
    if (
      mouseIsPressed && 
      mouseX > (x * width) / cols &&
      mouseX < ((x + 1) * width) / cols
      ) {
      
      if (x == 0 || x == 2 || x == 4)
      {
        keyColors[x] = color(0,255,0);
      }
      else
      {
        keyColors[x] = color(255,0,0);
      }
      } 
    
    fill(keyColors[x]);
    rect((x * width) / cols, height / 2, width / cols, height / 2);
    
  }
  
  // a bit hard coded, so I would want to figure out a better way of doing this 
  fill(200);
  text("C", ((width/cols)/2)-5, height-20)
  text("D", (((width/cols*3))/2)-5, height-20)
  text("E", (((width/cols*5))/2)-5, height-20)
  text("F", (((width/cols*7))/2)-5, height-20)
  text("G", (((width/cols*9))/2)-5, height-20)
  text("A", (((width/cols*11))/2)-5, height-20)
  text("B", (((width/cols*13))/2)-5, height-20)
  text("C", (((width/cols*15))/2)-5, height-20)
    
}
