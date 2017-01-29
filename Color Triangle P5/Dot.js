/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function Dot() {
	this.width = 50;
	this.height = 50;
	this.x = random(this.width / 2, windowWidth - (this.width / 2))
	this.y = random(this.height / 2, windowHeight - (this.height / 2))
	this.xColor = ((255 * this.x) / (windowWidth));
	this.fillColor = color(255);
	this.trueColor = color(0,0,0);
	
	this.move = function() {
		this.x = mouseX;
		this.y = mouseY;
		ellipse(this.x, this.y, this.width, this.height);
	}
	
	this.noMove = function() {
		ellipse(this.x, this.y, this.width, this.height);
	}
}