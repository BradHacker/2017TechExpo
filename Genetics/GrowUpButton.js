/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function GrowUpButton(parent1, parent2) {
    this.centerX = windowWidth/4;
    this.centerY = windowHeight/4 * 3;
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
        fill(color(51, 255, 51));
        stroke(color(0, 204, 0));
        strokeWeight(20);
        rect(this.x, this.y, this.width, this.height);
        noStroke();
        fill(255);
        textAlign(CENTER,CENTER);
        textFont("Sans-Serif");
        textSize(70);
        text("Grow Up", this.x, this.y, this.width, this.height);
    }
}