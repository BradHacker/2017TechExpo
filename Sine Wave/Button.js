/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function Button(type) {
    this.type = type;
    //Type: 1 - Sine, 2 - Cosine, 3 - Tangent
    this.width = windowWidth*0.130208333;
    this.height = windowHeight*0.0925925926;
    this.fontSize = windowWidth*0.0260416667
    this.x;
    this.y;
    this.fillColor;
    this.strokeColor;
    this.title;
    
    this.init = function() {
        this.y = (windowHeight/8) - (this.height/2);
        if(this.type == 1) {
            this.x = (windowWidth/4) - (this.width/2);
            this.fillColor = color(204, 0, 204);
            this.strokeColor = color(128, 0, 128);
            this.title = "Sine";
        } else if(this.type == 2) {
            this.x = (windowWidth/2) - (this.width/2);
            this.fillColor = color(77, 255, 166);
            this.strokeColor = (0, 204, 102);
            this.title = "Cosine";
        } else if(this.type == 3) {
            this.x = ((windowWidth/4) * 3) - (this.width/2);
            this.fillColor = color(255, 102, 102);
            this.strokeColor = color(204, 0, 0);
            this.title = "Tangent";  01
        }
    }
    
    this.draw = function() {
        fill(this.fillColor);
        stroke(this.strokeColor);
        strokeWeight(10);
        rect(this.x,this.y,this.width,this.height);
        textSize(this.fontSize);
        textFont("Sans-Serif");
        stroke(255);
        strokeWeight(1);
        fill(255);
        textAlign(CENTER,CENTER);
        text(this.title,this.x,this.y,this.width,this.height);
        noStroke();
    }
    
    this.checkClick = function() {
        if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            return true;
        }
    }
}