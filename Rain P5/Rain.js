/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function Rain() {
	//Generate random position above canvas
	this.x = random(windowWidth);
	this.y = random(-200);
	//Generate random length and thickness for drop
	this.length = random(10, 20);
	this.thick = random(4);
	//Generate random speed for drop
	this.speed = random(5) + 5;
	//Set rain color and detrimine the boundaries of the bucket
	this.fillColor = color(172, 190, 193, 240);
	this.leftSideOfBucket = mouseX - 46.5;
	this.rightSideOfBucket = mouseX + 46.5;
	this.topOfBucket = mouseY + 46.5;
	this.bottomOfBucket = mouseY - 46.5;
	
	//Influence Speed and Length based on Thickness (Depth)
	this.checkVars = function() {
		if(this.thick < 2.75) {
			this.speed -= 4;
			this.length -= 5;
			this.thick = 1;
		} else if (this.thick >= 2.75 && this.thick < 3.6) {
			this.speed = this.speed;
			this.length = this.length;
			this.thick = 2;
		} else if (this.thick >= 3.6) {
			this.speed += 4;
			this.length += 5;
			this.thick = 3;
		}
	}
	
	//Makes rain fall and handles bucket touches
	this.update = function() {
		//Resets bucket boundaries
		this.leftSideOfBucket = mouseX - 46.5;
		this.rightSideOfBucket = mouseX + 46.5;
		this.topOfBucket = mouseY - 46.5;
		this.bottomOfBucket = mouseY + 46.5;
		//Reset rain drop when it hits the bucket
		if(this.x > this.leftSideOfBucket && this.x < this.rightSideOfBucket) {
			if(this.y > this.topOfBucket && this.y < this.bottomOfBucket) {
				this.y = random(-200);
				this.x = random(windowWidth);
			}
		}
		//Move rain drop down and draw it
		this.y += this.speed;
		strokeWeight(this.thick);
		line(this.x, this.y, this.x, this.y + this.length);
		//Reset raindrop position when at bottom of canvas
		if(this.y > windowHeight) {
			this.y = random(-200);
			this.x = random(windowWidth);
		}
	}
	
	//Tells the bucket to fill up when touched by rain
	this.fillBucket = function() {
		if(this.x > this.leftSideOfBucket && this.x < this.rightSideOfBucket) {
			if(this.y > this.topOfBucket && this.y < this.bottomOfBucket) {
				return true;
			}
		} else {
			return false;
		}
	}
}