/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function Water() {
	//Set water boundaries
	this.x = mouseX - 38;
	this.y = mouseY + 46.5;
	//Set the amount of the bucket filled
	this.fillAmount = .5;
	this.filled = 0;
	
	//Handles filling the bucket
	this.fill = function() {
		this.x = mouseX - 40;
		this.y = mouseY + 46.5;
		//Adds height to water
		this.y += this.fillAmount;
		this.filled += this.fillAmount;
	}
	
	//Draws water
	this.draw = function() {
		rect(this.x, this.y, 80, -1 * this.filled);
	}
}