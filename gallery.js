let frames = [];
let xV;
let yV;
let gif1, gif2;
let gif1Size = 200;
let gif2Size = 200;
let stickmanX, stickmanY;
let frameObjects = [];
let lastCollisionTime = 0;
const COLLISION_COOLDOWN = 2000; 
let hit, phit = false; 


function preload() {
  gif1 = createImg("assets/stickman-walk2.gif");
  gif2 = createImg("assets/stickman-headscratch.gif");

  gif1.size(gif1Size, gif1Size);
  gif2.size(gif2Size, gif2Size);

  gif1.hide();
  gif2.hide();
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);

  // selecting frame elements from their id in html
  frame1 = select("#frame1");
  frame2 = select("#frame2");
  frame3 = select("#frame3");
  frame4 = select("#frame4");
  frame5 = select("#frame5");

  frames = [frame1, frame2, frame3, frame4, frame5];

  // idle gif shown first
  gif1.hide();
  gif2.show();

  gif1.style('z-index', '1');
  gif2.style('z-index', '1');

  stickmanX = windowWidth/2;
  stickmanY = windowHeight/2;

  //making each frame into an object with values attatched
  frameObjects = frames.map((f, i) => {
    let w = 100, h = 200;
    let x = random(windowWidth - w);
    let y = random(windowHeight - h);
    let xV = random(-0.5, 0.5);
    let yV = random(-0.5, 0.5);
    let link = f.elt.getAttribute('href');
    return {el: f, w, h, x, y, xV, yV, link};
  });

}

function draw() {

  // movement of frames and making sure it bounces off walls
  for (let frame of frameObjects) {
    frame.x += frame.xV;
    frame.y += frame.yV;
    
    if (frame.x < 0 || frame.x + frame.w > windowWidth) {
      frame.xV *= -1;
    }
       
    if (frame.y < 0 || frame.y + frame.h > windowHeight) {
        frame.yV *= -1;
    } 
    
    frame.el.position(frame.x, frame.y);
  }

  // stickman movement through key presses
  let moving = false;

  if (keyIsDown(87) || keyIsDown(UP_ARROW)) { // w or up
    stickmanY -= 5; moving = true;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) { // s or down
    stickmanY += 5; moving = true;
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) { // a or left
    stickmanX -= 5; moving = true;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { // d or right
    stickmanX += 5; moving = true;
  }

  stickmanX = constrain(stickmanX, 0, windowWidth - gif1Size/2);
  stickmanY = constrain(stickmanY, 0, windowHeight - gif1Size/2);

  // switch between idle and walking
  if (moving) {
    gif2.hide();
    gif1.show();
    gif1.position(stickmanX, stickmanY);
  } else {
    gif1.hide();
    gif2.show();
    gif2.position(stickmanX, stickmanY);
  }

// checking collision with frames, but taking into account a cooldown time 
// so that when we go back to the main gallery page we don't automatically go into a new frame
let currentTime = millis();

if (currentTime - lastCollisionTime > COLLISION_COOLDOWN) {
  for (let frame of frameObjects) {
      hit = collideRectRect(stickmanX, stickmanY, gif1Size, gif1Size, 
                         frame.x, frame.y, frame.w, frame.h);
    
    if (hit && !phit) {
        lastCollisionTime = currentTime;
        window.location.href = frame.link;
        break;
      }
    }
  } 
phit = hit;

}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
