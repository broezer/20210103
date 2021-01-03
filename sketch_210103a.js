// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  b1 = color(255);
  b2 = color(0);
  c1 = color(57, 227, 174);
  c2 = color(154, 108, 255);
  noLoop();
}

function draw() {
  //Background;
  
  setGradient(0, 0, width, height, c2, c1, Y_AXIS);
  //Foreground
  //setGradient(width/6, height/6, width/1.5, height/1.5, c1, c2, Y_AXIS);
  
  //Circle
  
   //setRadialGradientCircle(200, 200, 200, c1, c2);
   push();
   translate(width/2, height/2);
   rotate(HALF_PI);
   grdCircle2(0,0, width/1.5, c1, c2);
   pop();
    
    
   //Triangle
   translate(width/2, height/5.75);
   grdTriangle(0, 0, height/1.9, c2, c1);
   
   save("210103.png");
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}




function grdTriangle(x, y, h, c1, c2){
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line( ((x * 5) - (i))/2, i, ((x * 3) + i)/2, i);
    }
}

function grdCircle2(x, y, d, c1, c2) {
 let c = 100;
 for (let i=0; i<c; i++) {
   let col = lerpColor(c1, c2, i/c);
   let a = lerp(PI, 0, i/c);
   
   
   fill(col);
   noStroke();
   //ellipseMode(CENTER);
   arc(x, y, d, d, -a, a, CHORD);

 }
}
