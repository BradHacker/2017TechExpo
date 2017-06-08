function Hud() {
	this.hp = 100;
	this.hpMax = 100
	this.hpWidth = Math.round(windowWidth*0.197916667)
	this.maxHpWidth = Math.round(windowWidth*0.197916667)
	this.hpRed = 0;
	this.hpGreen = 255;
	this.hpColor = color(this.hpRed, this.hpGreen, 0);
	this.hpText = "HP: " + this.hp;
	this.ap = 0;
	this.score = 0;
	this.xp = 0;
	this.xpTop = 25;
	this.xpWidth = 0
	this.xpWidthTop = 25
	this.level = 1;
	this.levelText = "Level " + this.level;
	this.lp = 0;
	this.coolDownInc = 60/75;
	this.coolDownHeight = 75;
	this.hpUp = 0
	this.speedUp = 0
	this.knifeRadUp = 0
	this.cooldownUp = 0
	/*
	Hp - Health Points
	Ap - Action Points
	Xp - Experince Points
	Lp - Level Points
	*/
	this.hacked = false

	this.draw = function() {
		fill(0);
		rect(0,0,windowWidth,145);
		this.drawHp()
		this.drawXp()
		this.drawUpgrade()
		fill(255)
		noStroke()
		textSize(Math.round(windowWidth*0.0104166667))
		textAlign(CENTER, TOP)
		text("Use arrows to move and space to swing.  Use 1,2,3,4 for upgrades. Use ESC to pause.", 30, 15, windowWidth/4 - 50, 100)
	}
	
	this.drawHp = function() {
	  this.hpWidth = this.hp/this.hpMax * this.maxHpWidth
	  this.hpColor = color(this.hpRed, this.hpGreen, 0);
	  fill(50);
        rect(windowWidth - (Math.round(windowWidth*0.2265625)), 25, Math.round(windowWidth*0.213541667), 95);
        fill(100);
        rect(windowWidth - (Math.round(windowWidth*0.221354167)), 35, (Math.round(windowWidth*0.203125)), 75);
        textFont("Sans-Serif");
        textSize(15);
        fill(255);
        noStroke();
        fill(50);
		rect(windowWidth - (Math.round(windowWidth*0.21875)), 40, Math.round(windowWidth*0.197916667), 30);
	  fill(this.hpColor);
    	textAlign(LEFT,CENTER);
    	rect(windowWidth - (Math.round(windowWidth*0.21875)), 40, this.hpWidth, 30);
    	fill(255);
	  this.hpText = "HP: " + this.hp + " / " + this.hpMax;
    	text(this.hpText, windowWidth - (Math.round(windowWidth*0.21875)), 40, 280, 30);
    	text(("Score: " + this.score), windowWidth - (Math.round(windowWidth*0.21875)), 75, 280, 30);
    	textAlign(RIGHT,CENTER)
    	if(localStorage.getItem('score') == null) {
    	    text("Highscore: None", windowWidth - (Math.round(windowWidth*0.21875)), 75, Math.round(windowWidth*0.197916667), 30)
    	} else {
    	    text(("Highscore: " + localStorage.getItem('score')), windowWidth - (Math.round(windowWidth*0.21875)), 75, Math.round(windowWidth*0.197916667), 30)
    	}
	}
	
	this.drawXp = function() {
	  fill(50);
	  rect(windowWidth/2 - (Math.round(windowWidth*0.252604167)+1), 25, windowWidth/2 + 10, 80);
	  fill(25)
		rect(windowWidth/4, 30, windowWidth/2, 70);
		//Orange xp bar
		fill(color(255, 128, 0));
		rect(windowWidth/4, 30, this.xpWidth*(windowWidth/2), 70);
		fill(255)
		textAlign(CENTER,BOTTOM);
		textSize(20);
		text("Wave " + wave, 0, 0, windowWidth, 145);
		textSize(40);
		textAlign(RIGHT, CENTER);
		text("Level " + this.level, windowWidth/2 - windowWidth/4, 30, windowWidth/2, 70);
		textSize(40);
		textAlign(LEFT, CENTER);
		text("XP: " + this.xp + "/" + this.xpTop, windowWidth/2 - windowWidth/4 + 5, 30, windowWidth/2, 70);
	}
	
	this.drawUpgrade = function() {
	  textSize(20)
		textAlign(CENTER, CENTER)
	  text("LP: " + this.lp, 30, 35, windowWidth/4 - 50, 100)
	  fill(0, 163, 19)
	  strokeWeight(2)
	  stroke(0, 109, 12)
	  rect(20, 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(0, 109, 12)
	  textSize(30)
	  text(this.hpUp, 20, 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(255)
	  textSize(12)
	  text("Max HP +10", 20, 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(193, 3, 1)
	  stroke(109, 1, 0)
	  rect(22.5 + (Math.round(windowWidth*0.05390625)), 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(109, 1, 0)
	  textSize(30)
	  text(this.speedUp, 22.5 + (Math.round(windowWidth*0.05390625)), 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(255)
	  textSize(12)
	  text("Speed +1", 22.5 + (Math.round(windowWidth*0.05390625)), 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(0, 96, 193)
	  stroke(0, 68, 137)
	  rect(25 + ((Math.round(windowWidth*0.05390625))*2), 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(0, 68, 137)
	  textSize(30)
	  text(this.knifeRadUp, 25 + ((Math.round(windowWidth*0.05390625))*2), 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(255)
	  textSize(10)
	  text("Knife Rad +10", 25 + ((Math.round(windowWidth*0.05390625))*2), 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(247, 255, 40)
	  stroke(154, 160, 0)
	  rect(27.5 + ((Math.round(windowWidth*0.05390625))*3), 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(154, 160, 0)
	  textSize(30)
	  text(this.cooldownUp, 27.5 + ((Math.round(windowWidth*0.05390625))*3), 100, (Math.round(windowWidth*0.05390625)), 30)
	  fill(255)
	  textSize(10)
	  text("Cooldown -10%", 27.5 + ((Math.round(windowWidth*0.05390625))*3), 100, (Math.round(windowWidth*0.05390625)), 30)
	  
	}
	
	this.coolDown = function() {
		this.coolDownHeight -= this.coolDownInc;
	}
	
	this.drawCoolDown = function() {
		fill(color(51, 119, 255));
		rect(windowWidth - 370, 35, 30, this.coolDownHeight);
	}
	
	this.addXP = function(amount) {
	    this.xp += amount;
	    if(this.xp >= this.xpTop) {
	        this.level += 1
	        this.xpTop *= 2
	        this.xpWidth = 0
	        this.xp = 0
	        this.lp += 1
	    }
        this.xpWidth = this.xp/this.xpTop
	}
	
	this.upgrade = function(player, option) {
	    if(this.lp >= 1) {
    	    if(option == 1) {
    	      this.speedUp += 1
  	        player.speed += 1
  	        this.lp -= 1
    	    }
    	    else if(option == 0) {
    	      this.hpUp += 1
    	      this.newHp = player.hp/player.hpMax
    	      player.hpMax += 10
    	      player.hp = Math.round(this.newHp*player.hpMax)
  	        this.hp += 10
  	        this.hpMax += 10
  	        this.lp -= 1
    	    }
    	    
	        else if(option == 2) {
	          this.knifeRadUp += 1
            player.knifeRad += 10
            this.lp -= 1
	        }
    	    else if(option == 3) {
    	      this.cooldownUp += 1
              player.coolDownMax = Math.round(player.coolDownMax*.9)
              player.coolDownInc = 10/player.coolDownMax
              this.lp -= 1
    	    }
	    }
	}
}