function HealthPack() {
  this.x = random(this.rad, windowWidth - this.rad + 1)
  this.y = random(145 + this.rad, windowHeight - this.rad + 1)
  this.rad = 10
  this.diameter = this.rad *2
  this.color = color(0, 193, 12)
  this.textColor = color(0, 114, 7)
  this.used = false
  this.health = Math.round(random(1,10))
  if(this.health <= 4) {
    this.health = 5
  } else if(this.health > 4 && this.health <= 7) {
    this.health = 10
  } else if(this.health > 7 && this.health <= 8) {
    this.health = 15
  } else if(this.health == 9) {
    this.health = 20
  }
  
  this.draw = function() {
    fill(this.color)
    ellipse(this.x, this.y, this.diameter)
    fill(this.textColor)
    stroke(this.textColor)
    strokeWeight(1)
    textSize(10)
    textAlign(CENTER,CENTER)
    text(this.health, this.x - 9, this.y - this.rad, this.diameter, this.diameter)
  }
  
  this.teleport = function() {
    if(!this.used) {
      this.x = random(this.rad, windowWidth - this.rad)
      this.y = random(145 + this.rad, windowHeight - this.rad)
      this.health = Math.round(random(1,10))
      if(this.health <= 4) {
        this.health = 5
      } else if(this.health > 4 && this.health <= 7) {
        this.health = 10
      } else if(this.health > 7 && this.health <= 8) {
        this.health = 15
      } else if(this.health == 9) {
        this.health = 20
      }
    } else if(this.used) {
      this.x = 0
      this.y = 0
    }
    console.log("(" + this.x + "," + this.y + ")")
  }
  
  this.checkHit = function(other) {
    if((sqrt(pow((this.x - other.x),2)+pow((this.y - other.y),2)) <= this.rad + other.radius)) {
      console.log("HEALTH!!!!")
      this.used = true
  		this.teleport();
  		if(other.hp + this.health > other.hpMax) {
  		  other.hp = other.hpMax
  		} else {
  		  other.hp += this.health
  		}
  	}
  }
}