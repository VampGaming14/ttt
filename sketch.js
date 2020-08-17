function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  translate(200,200)
   rotate(-90)
  let h = hour();
  text('Current hour: \n' + h, 5, 50);
  let m = minute();
text('Current minute: \n' + m, 5, 50);
let s = second();
text('Current second: \n' + s, 5, 50);
   angleMode(DEGREES);
   arc(50, 55, 50, 50, 0, HALF_PI);
   noFill();
    arc(0, 0, 300, 300, 0, sAngle);
     arc(0, 0, 280, 280, 0, mAngle);
    arc(0, 0, 260, 260, 0, hAngle);
}

function draw() {
  background(255,255,255); 
  sAngle = map(s, 0, 60, 0, 360);
   mAngle = map(m, 0, 60, 0, 360);
   hAngle = map(h%12, 0, 12, 0, 360); 
    push();
    rotate(sAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();
  drawSprites();
}