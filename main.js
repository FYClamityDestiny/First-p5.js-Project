let img;

function preload() {
  img = loadImage("p5.png");
}

function setup() {
  canvas = createCanvas(400, 400);

}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
  fill(87, 174, 222);
    circle(375, 375, 50);
    circle(25, 375, 50);
    circle(25, 25, 50);
    circle(375, 25, 50);
    fill(248, 54, 255);
rect(100,350,200,50)
}
function take_Picture(){
save("myFirstpfivedotjsproject.png")
}