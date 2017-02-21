/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
var drops = [];
var water = [];
var waterRGB = [152, 170, 173];
var bucketRGB = [132, 135, 137];

//Create Canvas, Rain, and Water bucket. Also adjust rain drop variables based upon width
function setup() {
	createCanvas(windowWidth, windowHeight)
	for(i = 0; i < (windowWidth * 1.5); i++) {
		drops[i] = new Rain();
		drops[i].checkVars();
	}
	water[0] = new Water();
}

function draw() {
	//Create geometry locations
	var rectX1 = mouseX - 48.5;
	var rectY1 = mouseY - 48.5;
	var waterX = mouseX - 40;
	var waterY = mouseY + 40;
	//Set the first water background color
	var bucketColor = color(132, 135, 137);
	
	//Set the color of canvas and generate bucket
	background(color(44,56,69));
	fill(color(132, 135, 137));
	rect(rectX1, rectY1, 97, 97);
	//Set rain color and update droplet positions
	stroke(color(152, 170, 173));
	fill(color(152, 170, 173));
	for(i = 0; i < drops.length; i++) {
		drops[i].update();
		//Check if bucket is filled
		if(drops[i].fillBucket()) {
			water[0].fill();
		}
	}
	//Hide stroke and draw water background with color
	noStroke();
	fill(color(bucketRGB[0],bucketRGB[1],bucketRGB[2]));
	rect(mouseX - 42, mouseY - 48.5, 84, 90.5);
	//Set water color
	fill(color(waterRGB[0],waterRGB[1],waterRGB[2]));
	//Check if bucket is filled or not
	if(water[0].filled > 90.5) {
		noStroke();
		water[0].y = mouseY + 42;
		//Set water color and draw water
		fill(color(waterRGB[0],waterRGB[1],waterRGB[2]));
		rect(mouseX - 42, water[0].y, 84, -90.5);
		//Make bucket empty and set water background to water color
		water[0].filled = 0;
		bucketRGB[0] = waterRGB[0];
		bucketRGB[1] = waterRGB[1];
		bucketRGB[2] = waterRGB[2];
		//Set water color to random color
		waterRGB[0] = random(255);
		waterRGB[1] = random(255);
		waterRGB[2] = random(255);
		//Set how fast water fills to 99% of previous fill speed
		water[0].fillAmount *= .99;
	} else { //If bucket isn't filled
		//Draw water at detirmined point with negative fill height
		noStroke();
		water[0].y = mouseY + 42;
		rect(mouseX - 42, water[0].y, 84, -1 * water[0].filled);
	}
}