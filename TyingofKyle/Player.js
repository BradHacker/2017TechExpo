function Player() {
	this.x = windowWidth/2;
	this.y = windowHeight/2;
	this.width = 60;
	this.height = 60;
	this.speed = 5;
	this.direction = 1;
	this.hp = 100;
	this.hpMax = 100
	/*
	Direction Key -
	1 - Up
	2 - Rights
	3 - Left
	4 - Down
	*/
	this.color = color(51, 119, 255);
	this.radius = 30;
	this.alive = true;
	this.knifeX = this.x;
	this.knifeY = this.y;
	this.knifeRad = 55;
	this.knifeAngle = 0;
	this.knifeEndX = this.x + (this.knifeRad * cos(this.knifeAngle));
	this.knifeEndY = this.y + (this.knifeRad * sin(this.knifeAngle));
	this.swinging = false;
	this.swingCool = 0;
	this.coolDownMax = 60;
	this.coolDownInc = 10/this.coolDownMax;
	this.coolDownRadius = 25;
	this.full = true;
	this.hacked = false;
	this.score = 0

	this.move = function(direction) {
		this.direction = direction;
		if(this.direction == 1) {
			this.y -= this.speed;
		} else if(this.direction == 2) {
			this.x += this.speed;
		} else if(this.direction == 3) {
			this.x -= this.speed;
		} else if(this.direction == 4) {
			this.y += this.speed;
		}
		this.knifeX = this.x;
		this.knifeY = this.y;
		this.knifeEndX = this.x + (this.knifeRad * cos(this.knifeAngle));
		this.knifeEndY = this.y + (this.knifeRad * sin(this.knifeAngle));
	}

	this.draw = function() {
		fill(127);
		stroke(127);
		strokeWeight(5);
		line(this.knifeX, this.knifeY, this.knifeEndX, this.knifeEndY);
		fill(this.color);
		noStroke();
		ellipse(this.x,this.y,this.width,this.height);
		if(Math.round(this.coolDownRadius) < 25) {
			this.full = false;
		} else {
		  this.coolDownRadius = 25
			this.full = true;
		}
		if(this.full) {
			fill(0, 204, 0);
		} else {
			fill(color(0, 23, 153))
		}
		ellipse(this.x,this.y,this.coolDownRadius*2,this.coolDownRadius*2);
	}

	this.checkCollision = function() {
		if(this.y - this.radius <= 145) {
			this.y = 175;
			//console.log("top");
		}
		if(this.y + this.radius >= windowHeight) {
			this.y = windowHeight - 30;
			//console.log("bottom");
		}
		if(this.x - this.radius <= 0) {
			this.x = 30;
			//console.log("left");
		}
		if(this.x + this.radius >= windowWidth) {
			this.x = windowWidth - 30;
			//console.log("right");
		}
		this.knifeX = this.x;
		this.knifeY = this.y;
		this.knifeEndX = this.x + (this.knifeRad * cos(this.knifeAngle));
		this.knifeEndY = this.y + (this.knifeRad * sin(this.knifeAngle));
	}

	this.hurt = function(damage) {
		this.hp -= damage;
		if(this.hp <= 0) {
			this.alive = false;
		}
		console.log(this.hp);
	}

	this.swing = function() {
		if(this.swingCool == 0) {
			if(this.knifeAngle < 360) {
				this.knifeAngle += 12;
				this.swinging = true;
				this.coolDownRadius = 15;
				this.full = false;
			} else if(this.knifeAngle >= 360) {
				this.swinging = false;
				this.knifeAngle = 0;
				this.swingCool = this.coolDownMax;
				this.coolDownRadius = 15;
				this.full = false;
			}
		}
	}
}