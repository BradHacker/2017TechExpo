/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
var dots = [];
var overbox = 3;
var backColorR = 0;
var backColorG = 0;
var backColorB = 0; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(i = 0; i < 3; i++) {
		dots[i] = new Dot();
		console.log("created");
	}
	backColorR = random(255);
	backColorG = random(255);
	backColorB = random(255);
}

function draw() {
	background(color(backColorR,backColorG,backColorB));
	strokeWeight(6);
	fill(255);
	if(mouseX > (dots[0].x - (dots[0].height / 2)) && mouseX < (dots[0].x + (dots[0].height / 2)) && mouseY > (dots[0].y - (dots[0].width / 2)) && mouseY < (dots[0].y + (dots[0].width / 2))) {
		overbox = 0;
	} else if(mouseX > (dots[1].x - (dots[1].height / 2)) && mouseX < (dots[1].x + (dots[1].height / 2)) && mouseY > (dots[1].y - (dots[1].width / 2)) && mouseY < (dots[1].y + (dots[1].width / 2))) {
		overbox = 1;
	} else if(mouseX > (dots[2].x - (dots[2].height / 2)) && mouseX < (dots[2].x + (dots[2].height / 2)) && mouseY > (dots[2].y - (dots[2].width / 2)) && mouseY < (dots[2].y + (dots[2].width / 2))) {
		overbox = 2;
	} else {
		overbox = 3;
	}
	var a = 0;
	a = ((255 * dots[0].x) / (windowWidth));
	//console.log(a);
	dots[0].xColor = a;
	
	var b = 0;
	b = ((255 * dots[1].x) / (windowWidth))
	//console.log(b);
	dots[1].xColor = b;
	
	var c = 0;
	c = ((255 * dots[2].x) / (windowWidth))
	//console.log(c);
	dots[2].xColor = c;
	
	/*
	red = dots[0]
	green = dots[1]
	blue = dots[2]
	*/
	
	var line01Stroke = color(dots[0].xColor,  dots[1].xColor,  0);
	var line02Stroke = color(dots[0].xColor,  0,  dots[2].xColor);
	var line12Stroke = color(0,  dots[1].xColor,  dots[2].xColor);
	
	/*
	console.log("RG - " + line01Stroke);
	console.log("RB - " + line02Stroke);
	console.log("GB - " + line12Stroke);
	*/
	noStroke();
	fill(color(dots[0].xColor,dots[1].xColor,dots[2].xColor));
	triangle(dots[0].x,dots[0].y,dots[1].x,dots[1].y,dots[2].x,dots[2].y);
	
	stroke(line01Stroke);
	line(dots[0].x, dots[0].y, dots[1].x, dots[1].y);
	
	stroke(line12Stroke);
	line(dots[1].x, dots[1].y, dots[2].x, dots[2].y);
	
	stroke(line02Stroke);
	line(dots[2].x, dots[2].y, dots[0].x, dots[0].y);
	
	dots[0].fillColor = color(dots[0].xColor,0,0);
	dots[1].fillColor = color(0,dots[1].xColor,0);
	dots[2].fillColor = color(0,0,dots[2].xColor);
	dots[0].trueColor = color(255,0,0);
	dots[1].trueColor = color(0,255,0);
	dots[2].trueColor = color(0,0,255);
	
	for(i = 0; i < dots.length; i++) {
		fill(dots[i].fillColor);
		stroke(dots[i].trueColor);
		ellipse(dots[i].x, dots[i].y, dots[i].width, dots[i].height);
	}
	
	if(dots[0].xColor >= backColorR - 5 && dots[0].xColor <= backColorR + 5) {
		if(dots[1].xColor >= backColorG - 5 && dots[1].xColor <= backColorG + 5) {
			if(dots[2].xColor >= backColorB - 5 && dots[2].xColor <= backColorB + 5) {
				textSize(120);
				text(":)", 0, 0, windowWidth, windowHeight);
				textAlign(CENTER, CENTER);
				setTimeout(function(){location.reload();}, 2000);
			}
		}
	}
	
	console.log("fill");
	console.log(dots[0].xColor + "," + dots[1].xColor + "," + dots[2].xColor);
	console.log("back");
	console.log(backColorR + "," + backColorG + "," + backColorB);
	
}

function mouseDragged() {
	if(overbox == 0) {
		//console.log("dot 1 moved");
		dots[0].x = mouseX;
		dots[0].y = mouseY;
		dots[0].fillColor = color(dots[0].xColor,0,0);
		ellipse(dots[0].x, dots[0].y, dots[0].width, dots[0].height);
	}
	if(overbox == 1) {
		//console.log("dot 2 moved");
		dots[1].x = mouseX;
		dots[1].y = mouseY;
		dots[1].fillColor = color(0,dots[1].xColor,0);
		ellipse(dots[1].x, dots[1].y, dots[1].width, dots[1].height);
	}
	if(overbox == 2) {
		//console.log("dot 3 moved");
		dots[2].x = mouseX;
		dots[2].y = mouseY;
		dots[2].fillColor = color(0,0,dots[2].xColor);
		ellipse(dots[2].x, dots[2].y, dots[2].width, dots[2].height);
	}
}

function win() {
	location.reload();
}


function winFlash() {
	
}