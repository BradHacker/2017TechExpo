var player;
var hud;
var enemies = [];
var restartBut;
var wave = 1;
var enemyAmount = 10 * wave;
var enemiesKilled = 0;
var waveWait;
var gameOverText = 'Game Over';

function setup() {
	createCanvas(windowWidth,windowHeight);
	player = new Player();
	hud = new Hud();
	restartBut = new RestartButton();

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
	if(player.alive) {
		//Handle Player Actions
		if(player.alive) {
			if(keyIsDown(UP_ARROW)) {
				player.move(1);
			}
			if(keyIsDown(RIGHT_ARROW)) {
				player.move(2);
			}
			if(keyIsDown(LEFT_ARROW)) {
				player.move(3);
			}
			if(keyIsDown(DOWN_ARROW)) {
				player.move(4);
			}
			if(keyIsDown(32)) {
				if(player.swingCool == 0) {
					player.swinging = true;
					hud.coolDownHeight = 75;
				}
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
		player.draw();
	
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
					//console.log(hud.score);
				}
			}
		}
		for(i = 0;i < enemies.length; i++) {
			enemies[i].move(player.x, player.y);
			enemies[i].draw();
		}
		if(enemiesKilled == enemyAmount) {
			wave += 1;
			enemyAmount = 10 * wave;
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
		textSize(20);
		if(player.hacked) {
			hud.score = 0;
			wave = 0;
			gameOverText = 'Deleteing Your OS...';
		}
		text("Wave: " + wave, 0, windowHeight/8 * 6.8, windowWidth, windowHeight/8);
		text("Score: " + hud.score, 0, windowHeight/8 * 7, windowWidth, windowHeight/8);
		restartBut.draw();
		if(hud.score == 420) {
			textSize(500);
			fill(color(0, 128, 0));
			textAlign(CENTER,CENTER);
			strokeWeight(100);
			text("WEED", 0, 0, windowWidth, windowHeight);
		}
		if(player.hacked) {
			textSize(200);
			fill(color(255, 0, 0));
			textAlign(CENTER,CENTER);
			strokeWeight(100);
			text("NO HACKS! Charging " + prompt('DONT HACK EVER AGAIN! Enter your credit card info to send the Nigerian Prince $1000 or your OS will be deleted in 2 minutes.', 'Your Mom'), 0, 0, windowWidth, windowHeight);
			
		}
	}
}

function updateHud() {
	hud.hp = player.hp;
	hud.hpWidth = 2.8 * hud.hp;
	hud.hpRed = 2.55 * (100 - hud.hp);
	hud.hpGreen = 2.55 * hud.hp;
}

function mouseClicked() {
    if(restartBut.checkClick()) {
        location.reload();
    }
}

function touchStart() {
	player.x = mouseX;
	player.y = mouseY;
}

function checkHacks() {
	if(player.hp > 100) {
		player.hacked = true;
		player.alive = false;
	}
	for(i=0;i<enemies.length;i++) {
		if(enemies[i].damage < 2) {
			player.hacked = true;
			player.alive = false;
		}
	}
}