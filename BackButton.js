function BackButton() {
  this.width = 30
  this.height = 30;
  this.x = 10
  this.y = 10
  this.thickness = 10;
  
  this.draw = function() {
    stroke(255,255,255,50)
    strokeWeight(this.thickness)
    line(this.x + (this.width/2), this.y, this.x, this.y + (this.height/2))
    line(this.x + (this.width/2), this.y + this.height, this.x, this.y + (this.height/2))
    line(this.x, this.y + (this.height/2), this.x + this.width, this.y + (this.height/2))
  }
  
  this.checkClick = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      window.location.replace("https://tech-expo-p5-js-bredhacker.c9users.io/index.html")
    }
  }
}