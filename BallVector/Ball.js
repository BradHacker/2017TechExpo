function Ball(rad) {
  this.radius = rad
  this.acceleration = createVector(0,0)
  this.velocity
  this.prevVelocity = createVector(0,0)
  this.location = createVector(this.radius, this.radius)
  this.mousePoint = this.location
  this.topSpeed = 15
  
  this.display = function() {
    ellipse(this.location.x,this.location.y,this.radius*2,this.radius*2);
  }
  this.update = function() {
    if(this.location != this.mousePoint) {
      if(this.velocity != undefined) {
        this.velocity.normalize()
        this.velocity.mult(10)
        this.prevVelocity = this.velocity
      }
      this.velocity = p5.Vector.sub(this.mousePoint, this.location);
      this.velocity.normalize();
      this.acceleration = p5.Vector.sub(this.mousePoint, this.location);
      this.velocity.mult(.1*this.acceleration.mag());
      this.velocity.limit(this.topSpeed)
      this.velocity.add(this.prevVelocity)
      this.location.add(this.velocity);
      
      // if(this.location.dist(this.mousePoint) == 5) {
      //   while(this.location != this.mousePoint) {
      //     this.velocity = p5.Vector.sub(this.mousePoint, this.location);
      //     this.velocity.normalize();
      //     this.acceleration = p5.Vector.sub(this.mousePoint, this.location);
      //     this.velocity.mult(.1*this.acceleration.mag());
      //     this.velocity.limit(this.topSpeed)
      //     this.location.add(this.velocity);
      //   }
      // }
    }
    if(this.location.x + this.radius > windowWidth) {
      this.location.x = windowWidth-this.radius;
    }
    if(this.location.x - this.radius < 0) {
      this.location.x = this.radius;
    }
    if(this.location.y + this.radius > windowHeight) {
      this.location.y = windowHeight-this.radius;
    }
    if(this.location.y - this.radius < 0) {
      this.location.y = this.radius;
    }
  }
}