function Hud() {
	this.hp = 100;
	this.hpWidth = 280;
	this.hpRed = 0;
	this.hpGreen = 255;
	this.hpColor = color(this.hpRed, this.hpGreen, 0);
	this.hpText = "HP: " + this.hp;
	this.ap = 0;
	this.score = 0;
	this.xp = 0;
	this.lp = 0;
	this.coolDownInc = 60/75;
	this.coolDownHeight = 75;
	/*
	Hp - Health Points
	Ap - Action Points
	Xp - Experince Points
	Lp - Level Points
	*/

	this.draw = function() {
		this.hpColor = color(this.hpRed, this.hpGreen, 0);
		fill(0);
		rect(0,0,windowWidth,145);
		fill(50);
		rect(windowWidth - 335, 25, 310, 95);
		fill(100);
		rect(windowWidth - 325, 35, 290, 75);
		textFont("Sans-Serif");
		textSize(25);
		fill(255);
		noStroke();
		fill(50);
		rect(windowWidth - 320, 40, 280, 30);
		fill(this.hpColor);
		textAlign(LEFT,CENTER);
		rect(windowWidth - 320, 40, this.hpWidth, 30);
		//console.log(this.hpWidth);
		fill(255);
		this.hpText = "HP: " + this.hp;
		text(this.hpText, windowWidth - 320, 40, 100, 30);
		text(("Score: " + this.score), windowWidth - 320, 75, 280, 30);
		textAlign(CENTER,BOTTOM);
		textSize(20);
		text("Wave " + wave, 0, 0, windowWidth, 145);
	}
	
	this.coolDown = function() {
		this.coolDownHeight -= this.coolDownInc;
	}
	
	this.drawCoolDown = function() {
		fill(color(51, 119, 255));
		rect(windowWidth - 370, 35, 30, this.coolDownHeight);
	}
}