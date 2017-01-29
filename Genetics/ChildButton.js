function ChildButton(parent1, parent2) {
    this.centerX = windowWidth/2;
    this.centerY = windowHeight/3;
    this.width = 350;
    this.height = 150;
    this.x = this.centerX - (this.width/2);
    this.y = this.centerY - (this.height/2);
    this.parent1 = parent1;
    this.parent2 = parent2;
    
    this.checkClick = function() {
        if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            return true;
        }
    }
    
    this.draw = function() {
        fill(color(255, 255, 51));
        stroke(color(230, 230, 0));
        strokeWeight(20);
        rect(this.x, this.y, this.width, this.height);
        noStroke();
        fill(255);
        textAlign(CENTER,CENTER);
        textFont("Sans-Serif");
        textSize(90);
        text("Child", this.x, this.y, this.width, this.height);
    }
}