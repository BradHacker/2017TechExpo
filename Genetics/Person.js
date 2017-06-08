/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function Person(allele, person) {
    this.gene1 = allele.gene1;
    this.gene2 = allele.gene2;
    this.person = person;
    this.color = color(255,255,255);
    this.made = true;
    
    this.setColor = function() {
        if(this.made == true) {
            if(this.gene1 == 1 || this.gene2 == 1) {
                this.color = color(255, 51, 133);
            } else {
                this.color = color(204, 0, 153);
            }
        } else if(this.made == false) {
            this.color = color(255, 140, 26);
        }
    }
    
    this.draw = function() {
        if(this.person == 1) {
            this.xPos = windowWidth/4;
            this.yPos = windowHeight/3;
            fill(this.color);
            ellipse(this.xPos, this.yPos, 200, 200);
        } else if(this.person == 2) {
            this.xPos = (windowWidth/4) * 3;
            this.yPos = windowHeight/3;
            fill(this.color);
            ellipse(this.xPos, this.yPos, 200, 200);
        } else if(this.person == 3) {
            this.xPos = windowWidth/2;
            this.yPos = (windowHeight/3) * 2;
            fill(this.color);
            ellipse(this.xPos, this.yPos, 200, 200);
        }
    }
}