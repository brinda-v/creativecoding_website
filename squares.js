
let colors = ['red','orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let distance = 60; 
let size = 40; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  for (let x = 0; x < colors.length; x++){
    for (let y = 0; y < colors.length; y++){
      
      if (mouseX >= x*distance && mouseX < x*distance+size && mouseY > y*distance && mouseY < y*distance+size){
        
        fill(0)
      }
      
      else
        {
          fill(color(colors[x]));
          
        }
  
      rect (x*distance, y*distance, size, size);
      
    }
  
  }
  
}