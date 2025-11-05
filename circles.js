function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}

function draw() {
  background(0);
  
  for (let x = 0; x <= mouseX; x+=50){
    for (let y = 0; y <= mouseY; y+=50){
      
      i = map(x,0,width,0,1);
      col = lerpColor(color('#E044A7'),color('#99E472'), i);
      
      fill(col); 
      ellipse(x,y,random(50),random(50)); 
    }
  }
  
}