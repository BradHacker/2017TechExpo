function PartnerButton() {
    this.centerX = windowWidth/4 * 3;
    this.centerY = (windowHeight/4) * 3;
    this.width = 350;
    this.height = 150;
    this.x = this.centerX - (this.width/2);
    this.y = this.centerY - (this.height/2);
    
    this.checkClick = function() {
        if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            return true;
        }
    }
    
    this.draw = function() {
        fill(color(0, 204, 153));
        stroke(color(0, 153, 115));
        strokeWeight(20);
        rect(this.x, this.y, this.width, this.height);
        noStroke();
        fill(255);
        textAlign(CENTER,CENTER);
        textFont("Sans-Serif");
        textSize(90);
        text("Partner", this.x, this.y, this.width, this.height);
    }
}