function RestartButton() {
  this.x = windowWidth/2;
  this.y = windowHeight/4 * 3;
  this.width = 300;
  this.height = 100;
  this.fillColor = color(0, 102, 255);
  this.strokeColor = color(0, 71, 179);

  this.draw = function() {
    fill(this.fillColor);
    stroke(this.strokeColor);
    strokeWeight(20);
    rect(this.x - (this.width/2), this.y - (this.height/2), this.width, this.height);
    textFont("Sans-Serif");
    textSize(80);
    textAlign(CENTER,CENTER);
    fill(255);
    noStroke();
    text("Restart", this.x - (this.width/2), this.y - (this.height/2), this.width, this.height);
  }
  this.checkClick = function() {
      if(mouseX >= this.x - (this.width/2) && mouseX <= this.x + (this.width/2) && mouseY >= this.y - (this.height/2) && mouseY <= this.y + (this.height/2)) {
          return true;
      }
  }
}
