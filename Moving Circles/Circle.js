/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function Circle(clicked) {
    this.side = random(2);
    this.xspeed = random(-5,5);
    this.size = random(15,50);
    this.radius = this.size / 2;
    this.yspeed = random(-3, 3);
	this.popped = false;
	this.fillColor = color(255,255,255);
	
    if(clicked == true) {
        this.x = mouseX;
        this.y = mouseY;
    } else {
        this.x = 0;
        this.y = random(windowHeight);
        
        if(this.side <= 1) {
            this.x = random(-200, 0 - this.radius);
        } else {
            this.x = random(windowWidth + this.radius, windowWidth + 200);
        }
    }
    
    this.update = function() {
		if(this.popped == false) {
            if(this.x + this.radius > windowWidth) {
                this.xspeed = this.xspeed * -1;
                //console.log("bounced");
            }
                
            if(this.x - this.radius < 0) {
                this.xspeed = this.xspeed * -1;
                //console.log("bounced");
            }
		
            if(this.y + this.radius > windowHeight) {
                this.yspeed = this.yspeed * -1;
                //console.log("bounced");
            }
            if(this.y - this.radius < 0) {
                this.yspeed = this.yspeed * -1;
                //console.log("bounced");
            }
                
            this.x += this.xspeed;
            this.y += this.yspeed;
            
            noStroke();
            fill(this.fillColor);
            ellipse(this.x, this.y, this.size, this.size);
            //console.log("drawn");
        }
        if(this.popped == true) {
            noStroke();
            fill(255);
            ellipse(this.x, this.y, this.size, this.size);
        }
    }
}