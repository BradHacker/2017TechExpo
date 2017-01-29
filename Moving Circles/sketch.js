/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
var circles = [];
var r;
var g;
var b;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(i = 0; i < 0; i++) {
        circles[i] = new Circle(false);
		r = random(255);
		g = random(255);
		b = random(255);
		circles[i].fillColor = color(255);
    }
}

function draw() {
    background(0);
	for(a = 0; a < circles.length; a++) {
		for(b = 0; b < circles.length; b++) {
			if(a!= b && (sqrt(pow((circles[a].x - circles[b].x),2)+pow((circles[a].y - circles[b].y),2)) <= circles[a].radius + circles[b].radius)) {
				circles[a].popped = true;
				circles[b].popped = true;
			}
		}
	}
    for(i = 0; i < circles.length; i++) {
        if(this.popped == true) {
            circles.splice(i,1);
            console.log("popped");
	    }
        circles[i].update();
    }
	
}

function mousePressed() {
    circles.push(new Circle(true));
	r = random(50,255);
	g = random(50,255);
	b = random(50,255);
	circles[circles.length - 1].fillColor = color(r,g,b);
    //console.log("created");
    //console.log(r + ", " + g + ", " + b);
}