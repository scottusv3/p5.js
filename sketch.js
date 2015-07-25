function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  background(12);
  x=12;y=12;  r=255,g=0,b=0;
}

function draw() {
  // draw stuff here

   fill(r,g,b);
   rect(x, y, 50, 50);


x = x+ 5; y = y + 5;  r=r-5;

}
