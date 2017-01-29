function Enemy() {
  this.x;
  this.y;
  this.playerx;
  this.playery;
  this.speed = 2;
  this.color = color(153,0,0);
  this.radius = 5;
  this.dead = false;
  this.percentTowards = 1.4;
  this.randomMovementFactor = 2;


  this.init = function() {
    this.dead = false;
    this.telRand();
  }


  this.draw = function() {
	if(!this.dead) {
    	fill(this.color);
		noStroke();
    	ellipse(this.x, this.y, 10, 10);
	}
  }


  this.checkInitSpawn = function(other) {
    if(this.x - 5 >= windowWidth/2 - 25 && this.x <= windowWidth/2 + 25 && this.y >= windowHeight/2 - 25 && this.y <= windowHeight/2 + 25) {
      this.x = random(5, windowWidth - 5);
      this.y = random(150, windowWidth - 5);
      //console.log("touched");
    }

    if(this.x + 5 >= other.x - 5 || this.x - 5 <= other.x + 5 || this.y + 5 >= other.y - 5 || this.y - 5 <= other.y + 5) {
      this.x = random(5, windowWidth - 5);
      this.y = random(150, windowWidth - 5);
      //console.log("touched");
    }
  }


  this.checkHit = function(other) {
    if(a!= b && (sqrt(pow((enemies[a].x - other.x),2)+pow((enemies[a].y - other.y),2)) <= enemies[a].radius + other.radius)) {
		//console.log("touching");
		this.telRand();
    this.dead = true;
		return true;
	}
  }


  this.checkKill = function(otherX, otherY, otherRad) {
    if(a!= b && (sqrt(pow((enemies[a].x - otherX),2)+pow((enemies[a].y - otherY),2)) <= enemies[a].radius + otherRad)) {
		//console.log("touching");
		this.telRand();
    this.dead = true;
		return true;
	}
  }


  this.telRand = function() {
    this.edge = random([1,2]);
    /*
    1 - top / bottom
    2 - right / left
    */
    if(this.edge == 1) {
      if(1 <= random(0,2)) {
    		this.y = random(45, 145);
        this.x = random(-100, windowWidth + 100);
    	} else {
        this.y = random(windowHeight, windowHeight + 200);
        this.x = random(-100, windowWidth + 100);
      }
    } else if(this.edge == 2) {
      if(1 <= random(0,2)) {
        this.x = random(-100, 0);
        this.y = random(-100, windowHeight + 100);
      } else {
  		  this.x = random(windowWidth, windowWidth + 100);
        this.y = random(-100, windowHeight + 100);
  	  }
    }
  }


  this.move = function(playerX, playerY) {
	  if(!this.dead) {
  	  if(this.x > playerX) {
        if(this.percentTowards >= random(2)) {
  		    this.x -= this.speed;
        } else {
          this.x += this.speed;
        }
  			this.x += random(-this.randomMovementFactor, this.randomMovementFactor);
  	  } else if(this.x < playerX) {
        if(this.percentTowards >= random(2)) {
  		    this.x += this.speed;
        } else {
          this.x -= this.speed;
        }
  		  this.x += random(-this.randomMovementFactor, this.randomMovementFactor);
  	  } else if(this.x == playerX) {
  		  this.x += random(-this.randomMovementFactor, this.randomMovementFactor);
  	  }

      if(this.y > playerY) {
        if(this.percentTowards >= random(2)) {
  		    this.y -= this.speed;
        } else {
          this.y += this.speed;
        }
  			this.y += random(-this.randomMovementFactor, this.randomMovementFactor);
  	  } else if(this.y < playerY) {
        if(this.percentTowards >= random(2)) {
  		    this.y += this.speed;
        } else {
          this.y -= this.speed;
        }
  		  this.y += random(-this.randomMovementFactor, this.randomMovementFactor);
  	  } else if(this.y == playerY) {
  		  this.y += random(-this.randomMovementFactor, this.randomMovementFactor);
  	  }
  	}
  }
}
