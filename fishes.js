let fishes = [];

class Fish {
  constructor(x,y){
    
    this.x = x; 
    this.y = y; 
    
    this.bubbles = []

    this.bodyLength = random(50,100); 
    this.bodyHeight = random(20,80); 
    
    this.tailLength = random(20,50);
    this.tailHeight = random(20,100);
    
    this.bodyCol = color(random(255), random(255), random(255));
    this.tailCol = color(random(255), random(255), random(255), random(100,255));
    
    //speed and direction 
    this.xV = random([-3, -2, -1, 1, 2, 3]);
    this.yV = random(-2,2); 
    
    //wiggle 
    this.tailAngle = random(TWO_PI); 
    this.tailSpeed = map(this.xV, -3, 3, 0.05, 0.5); 
    this.tailWiggle = 0; 
    
  }
  
  bubbles(){
    
    
  }
  
  display(){
    
    push()
    translate(this.x, this.y);
    rotate(radians(this.tailWiggle));
    
    // fishes are always created with their tail on the right, but if their x velocity is towards the right, then this will flip everything on the x axis so the tail is on the left
    if (this.xV > 0){
      scale(-1,1); 
    }
    
    fill(this.bodyCol); 
    noStroke();
    ellipse(0, 0, this.bodyLength, this.bodyHeight);
    

    fill(this.tailCol);
    noStroke();
    triangle(this.bodyLength/2,0,this.bodyLength/2 + this.tailLength, this.tailHeight, this.bodyLength/2 + this.tailLength, -this.tailHeight);
    
    pop();
  }
  
  swim(){
    this.x+= this.xV; 
    this.y+= this.yV;
    this.tailAngle+=this.tailSpeed; 
    this.tailWiggle = sin(this.tailAngle) * 7; 
    
    //boundaries where the fish will flip directions 
    if (this.x < - this.bodyLength + this.tailLength || this.x > width + this.bodyLength - this.tailLength){
      this.xV *= -1;
    }
    
    if (this.y < - this.bodyHeight + this.tailHeight || this.y > height + this.bodyHeight - this.tailHeight){
      this.yV *= -1; 
    }
    
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(color('#00CCFF'));
  
  for (let i = 0; i < fishes.length; i++){
    fishes[i].display(); 
    fishes[i].swim();
    
  }
  
}

function mousePressed(){
  
  fishes.push(new Fish(mouseX, mouseY));
}