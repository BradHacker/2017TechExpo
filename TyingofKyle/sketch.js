var player;
var hud;
var enemies = [];
var restartBut;
var wave = 1;
var enemyAmount;
var enemiesKilled = 0;
var waveWait;
var gameOverText = 'Game Over';
var paused = false;
var healthPack
var healthPackChance
var back
var high = ""
var highs = []
var highscore
var newHigh
var highName
var alreadyHigh = 0
var upKeyUp = true
var paused = false
var escUp = true;
var pauseFlash = 0
var weed;

function setup() {
  weed = loadImage("weed.png")
  frameRate(60)
  enemyAmount = Math.round(pow(1.3, wave))
	createCanvas(windowWidth,windowHeight);
	player = new Player();
	hud = new Hud();
	restartBut = new RestartButton();
	healthPack = new HealthPack()
	healthPack.teleport()
	back = new BackButton()

	//Create enemies
	for(i = 0;i < enemyAmount; i++) {
		enemies[i] = new Enemy();
		enemies[i].init();
	}
	for(a=0;a<enemies.length;a++) {
		for(b=0;b<enemies.length;b++) {
			if(a!= b && (sqrt(pow((enemies[a].x - enemies[b].x),2)+pow((enemies[a].y - enemies[b].y),2)) <= enemies[a].radius + enemies[b].radius)) {
				enemies[a].telRand();
				enemies[b].telRand();
			}
		}
	}
}

function draw() {
	background(250);
	if(!paused) {
  	if(player.alive) {
  		//Handle Player Actions
  		if(player.alive) {
  			if(keyIsDown(UP_ARROW) || keyIsDown(87)) {
  				player.move(1);
  			}
  			if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
  				player.move(2);
  			}
  			if(keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
  				player.move(3);
  			}
  			if(keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
  				player.move(4);
  			}
  			if(keyIsDown(32)) {
  				if(player.swingCool == 0) {
  					player.swinging = true;
  					hud.coolDownHeight = 75;
  				}
  			}
  			if(keyIsDown(49) && upKeyUp) {
  			  hud.upgrade(player, 0)
  			  upKeyUp = false
  			}
  			if(keyIsDown(50) && upKeyUp) {
  			  hud.upgrade(player, 1)
  			  upKeyUp = false
  			}
  			if(keyIsDown(51) && upKeyUp) {
  			  hud.upgrade(player, 2)
  			  upKeyUp = false
  			}
  			if(keyIsDown(52) && upKeyUp) {
  			  hud.upgrade(player, 3)
  			  upKeyUp = false
  			}
  			if(keyIsDown(27) && escUp) {
  			  paused = true
  			  escUp = false
  			}
  			if(player.swinging == true) {
  				player.swing();
  			}
  			if(player.swingCool > 0) {
  				player.swingCool -= 1;
  				player.coolDownRadius += player.coolDownInc;
  			}
  		}
  		player.checkCollision();
  		healthPack.checkHit(player)
  		player.draw();
  		healthPack.draw()
  	
  		//Check Enemy Collisions
  		//console.log(enemies.length);
  		for(a=0;a<enemies.length;a++) {
  			//console.log('ran');
  			if(enemies[a].checkHit(player)) {
  				player.hurt(enemies[a].damage);
  				updateHud();
  				console.log('hurt');
  				enemiesKilled += 1;
  				console.log('hit');
  			}
  			if(player.swinging) {
  				if(enemies[a].checkKill(player.knifeX, player.knifeY, player.knifeRad)) {
  					enemiesKilled += 1;
  					hud.score += 10;
  					player.score += 10
  					hud.addXP(1)
  					console.log('XP: ' + hud.xp);
  				}
  			}
  		}
  		for(i = 0;i < enemies.length; i++) {
  			enemies[i].move(player.x, player.y);
  			enemies[i].draw();
  		}
  		if(enemiesKilled >= enemyAmount) {
  			wave += 1;
  			healthPackChance = random([1,2])
  			if(healthPackChance == 1 && healthPack.used == true) {
  			  healthPack.used = false
  			  healthPack.teleport()
  			}
  			enemyAmount = Math.round(pow(1.3, wave))
  			enemiesKilled = 0;
  			waveWait = 0;
  			//console.log("Wave: " + wave);
  			//console.log("EnemyAmount: " + enemyAmount);
  			//Create enemies
  			for(i = 0;i < enemyAmount; i++) {
  				enemies[i] = new Enemy();
  				enemies[i].init();
  			}
  			for(a=0;a<enemies.length;a++) {
  				for(b=0;b<enemies.length;b++) {
  					if(a!= b && (sqrt(pow((enemies[a].x - enemies[b].x),2)+pow((enemies[a].y - enemies[b].y),2)) <= enemies[a].radius + enemies[b].radius)) {
  						enemies[a].telRand();
  						enemies[b].telRand();
  					}
  				}
  			}
  			console.log("EnemiesLength: " + enemies.length);
  		}
  		//console.log("EnemiesKilled: " + enemiesKilled);
  	
  		//Handle HUD
  		updateHud();
  		hud.draw();
  		//console.log('Player HP: ' + player.hp);
  		//console.log('Hud HP: ' + hud.hp);
  	}
  	//Check for Hackers
  	checkHacks();
  	
  	//When Player Dies
  	if(!player.alive) {
  		fill(50);
  		noStroke()
  		rect(0,0,windowWidth,windowHeight);
  		fill(color(51, 119, 255));
  		ellipse(windowWidth/2, windowHeight/4, 200, 200);
  		fill(0);
  		stroke(0);
  		strokeWeight(40);
  		line(windowWidth/2 - 120, windowHeight/4 - 120, windowWidth/2 + 120, windowHeight/4 + 120);
  		line(windowWidth/2 + 120, windowHeight/4 - 120, windowWidth/2 - 120, windowHeight/4 + 120);
  		fill(255);
  		noStroke();
  		textSize(90);
  		textAlign(CENTER,CENTER);
  		text(gameOverText, 0, 0, windowWidth, windowHeight);
  		textSize(30)
  		if(localStorage.highName == null) {
  		  text("No one holds a highscore yet.", 0, 70, windowWidth, windowHeight)
  		} else {
  		  text("Highscore today currently held by " + localStorage.getItem('highName') + " with a score of " + localStorage.getItem('score'), 0, 70, windowWidth, windowHeight)
  		}
  		textSize(20);
  		if(player.hacked) {
  			hud.score = 0;
  			wave = 0;
  			gameOverText = 'Deleteing Your OS...';
  		}
  		text("Level: " + hud.level, 0, windowHeight/8 * 6.6, windowWidth, windowHeight/8);
  		text("Wave: " + wave, 0, windowHeight/8 * 6.8, windowWidth, windowHeight/8);
  		text("Score: " + hud.score, 0, windowHeight/8 * 7, windowWidth, windowHeight/8);
  		restartBut.draw();
  		if(hud.score == 420) {
  			textSize(500);
  			fill(color(0, 128, 0));
  			textAlign(CENTER,CENTER);
  			strokeWeight(100);
  			text("WEED", 0, 0, windowWidth, windowHeight);
  			for(i = 1;i<3;i++) {
  			  for(x = 1;x<5;x++) {
  			    if(i == 1) {
  			      image(weed, windowWidth/8*x, windowHeight/8, 500, 312)
  			    } else {
  			      image(weed, windowWidth/8*x, windowHeight/8*5, 500, 312)
  			    }
  			  }
  			}
  		}
  		if(player.hacked) {
  			textSize(200);
  			fill(color(255, 0, 0));
  			textAlign(CENTER,CENTER);
  			strokeWeight(100);
  			text("NO HACKS! Charging " + prompt('DONT HACK EVER AGAIN! Enter your credit card info to send the Nigerian Prince $1000 or your OS will be deleted in 2 minutes.', '**** **** **** ****'), 0, 0, windowWidth, windowHeight);
  			
  		}
      if(localStorage.getItem('highName') == null) {
        alreadyHigh = 1
  	    highName = prompt("You are the first to play. Enter your name: ")
  	    localStorage.setItem('highName', highName)
  	    localStorage.setItem('score', hud.score)
      } else {
        highscore = parseInt(localStorage.getItem('score'), 10)
      }
  		if(hud.score >= highscore && alreadyHigh != 1) {
  		  alreadyHigh = 1
  	    highName = prompt("HIGHSCORE! Enter your name: ")
  	    localStorage.setItem('highName', highName)
  	    localStorage.setItem('score', hud.score)
  		}
  	}
	} else if(paused) {
	  if(keyIsDown(27) && escUp) {
	    paused = false
	    escUp = false
	  }
	  player.draw()
	  healthPack.draw()
	  for(i = 0;i < enemies.length; i++) {
			enemies[i].draw();
		}
		hud.draw()
		fill(0, 50)
		rect(0,0,windowWidth,windowHeight)
		if(pauseFlash <= 45) {
		  fill(255)
		  textSize((Math.round(windowWidth*0.0833333333)))
		  textAlign(CENTER,CENTER)
		  text("PAUSED",0,0,windowWidth,windowHeight)
		}
		pauseFlash += 1
		if(pauseFlash > 90) {
		  pauseFlash = 0
		}
	}
	back.draw()
}

function updateHud() {
	hud.hp = player.hp;
	hud.hpWidth = hud.hp/hud.hpMax * hud.maxHpWidth
	hud.hpRed = 2.55 * (hud.hpMax - hud.hp);
	hud.hpGreen = 2.55 * hud.hp;
}

function mouseClicked() {
  back.checkClick()
  if(mouseX > 20 && mouseX < 27.5 + (Math.round(windowWidth*0.05390625)*4) && mouseY > 100 && mouseY < 130) {
    //console.log("hi")
    hud.upgrade(player, upgradeClick())
  }
  if(restartBut.checkClick() && player.alive == false) {
      location.reload();
  }
}

function touchStart() {
	player.x = mouseX;
	player.y = mouseY;
}

function checkHacks() {
	if(player.hp > player.hpMax) {
		player.hacked = true;
		hud.hacked = true;
		player.alive = false;
	}
	for(i=0;i<enemies.length;i++) {
		if(enemies[i].damage < 2) {
			player.hacked = true;
			hud.hacked = true;
			player.alive = false;
		}
	}
	if(player.score != hud.score) {
	  player.hacked = true
	  hud.hacked = true;
	  player.alive = false
	}
	if(hud.hpUp + hud.speedUp + hud.knifeRadUp + hud.cooldownUp + hud.lp != hud.level - 1) {
	  player.hacked = true
	  hud.hacked = true;
	  player.alive = false
	}
}

function upgradeClick() {
	  if(mouseX > 20 && mouseX < (Math.round(windowWidth*0.05390625)) && mouseY > 100 && mouseY < 130) {
	    //console.log('lolololololololol')
	    return 0
	  }
	  else if(mouseX > 22.5 + (Math.round(windowWidth*0.05390625)) && mouseX < 22.5 + (Math.round(windowWidth*0.05390625)*2) && mouseY > 100 && mouseY < 130) {
	    return 1
	  }
	  else if(mouseX > 25 + (Math.round(windowWidth*0.05390625)*2) && mouseX < 25 + (Math.round(windowWidth*0.05390625)*3) && mouseY > 100 && mouseY < 130) {
	    return 2
	  }
	  else if(mouseX > 27.5 + (Math.round(windowWidth*0.05390625)*3) && mouseX < 27.5 + (Math.round(windowWidth*0.05390625)*4) && mouseY > 100 && mouseY < 130) {
	    return 3
	  }
	  else {
	    return false
	  }
	}

function keyReleased() {
  if(!keyIsDown(49) && !keyIsDown(50) && !keyIsDown(51) && !keyIsDown(52)) {
    upKeyUp = true
  }
  if(keyCode == 27) {
    escUp = true
    //console.log('asf')
  }
}