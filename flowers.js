numRows = 20; 
numCols = 20; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function flower (x, y, d, smallD, col, petalCol,size) {
  
  fill(col);
  //scale(1)
  circle(x, y, d);
  
  fill(petalCol); 
  circle(x+d, y, d);
  circle(x+smallD, y+(d/2), smallD);
  circle(x, y+d, d);
  circle(x-smallD, y+(d/2), smallD);
  circle(x-d, y, d);
  circle(x-(d/2), y-smallD, smallD);
  circle(x, y-d, d);
  circle(x+(d/2), y-smallD, smallD);
  
}

function draw() {
  background('#00CC00');
  
  let centerSize = 25; 
  let petalSize = 15; 
  let flowerSize = centerSize + petalSize;
  let centerCol = color(0); 
  let petalCol = color(200);
  
  for (let i = 0; i < numRows; i++){
    
    for (let j = 0; j < numCols; j++){
      
      let x = flowerSize + (2*flowerSize*i);
      let y = flowerSize + (2*flowerSize*j);
      
      let distMouse = dist(mouseX, mouseY, x, y)
      
      if (mouseIsPressed){
        
        frameRate(5); 
        centerCol = color(random(255), random(255), random(255));
        petalCol = color (random(255),random(255), random(255));
        
      }
      
      if (distMouse < flowerSize){
        flower(x,y,centerSize*1.5,petalSize*1.5,centerCol,petalCol,j);
        
      }
      else {
        
flower(x,y,centerSize,petalSize,centerCol,petalCol,j);
        
      }
      
    }
 
  }

}
