var ball
var r
var g
var b
var col
var back
var count = 0

function setup() {
  ball = new Ball(16)
  createCanvas(windowWidth,windowHeight)
  point = createGraphics(windowWidth,windowHeight)
  back = new BackButton()
  con = createGraphics(windowWidth,windowHeight)
}

function draw() {
  background(52,61,70)
  point.background(255, 0)
  point.strokeWeight(4)
  image(point,0,0)
  ball.mousePoint = createVector(mouseX,mouseY)
  strokeWeight(1)
  stroke(255)
  fill(52,61,70)
  ball.update()
  ball.display()
  strokeWeight(4)
  line(ball.location.x,ball.location.y,mouseX,mouseY)
  r = random(255)
  g = random(255)
  b = random(255)
  col = color(r,g,b)
  point.fill(col)
  point.noStroke()
  //if(mouseIsPressed) {
    point.ellipse(ball.location.x,ball.location.y,8,8)
    count += 1
  //}
  background(0, 0)
  textAlign(RIGHT, BOTTOM)
  textSize(30)
  strokeWeight(2)
  fill(255)
  text(count, 0, 0, windowWidth, windowHeight)
  back.draw()
  if(keyIsDown(32)) {
    point.clear()
    count = 0
  }
}

function mousePressed() {
  back.checkClick()
}