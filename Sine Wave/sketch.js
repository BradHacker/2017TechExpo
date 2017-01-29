/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
var dots = [];
var dotAmount = 205;
var spaces = dotAmount - 1;
var amp = 0;
var destAmp = 0;
var ampMax = 0;
var ampMin = 0;
var ampInc = 1;
var shift = 0;
var shiftInc = .05;
var inversed = false;
var r = 0;
var g = 0;
var b = 0;
var moving = 0;
var movingSpeed = 1;
var wave = 1;
/*
Wave Key -
1 - Sine
2 - Cosine
3 - Tangent
*/
var sinBut;
var cosBut;
var tanBut;

function setup() {
    createCanvas(windowWidth,windowHeight);
    amp = 1;
    r = 50;
    for(i=0;i<dotAmount;i++) {
        dots.push(new Dot());
        dots[i].color = color(r,0,0);
        r += (205/dotAmount);
        console.log(r);
        dots[i].x = ((((windowWidth/spaces)) - (10/spaces)) * i) + 5;
        dots[i].y = amp * sin(2*dots[i].x - shift) + (windowHeight / 2);
        dots[i].draw();
    }
    for(i=0;i<dotAmount-1;i++) {
        if(i < dotAmount) {
            stroke(dots[i].color);
            strokeWeight(2);
            line(dots[i].x, dots[i].y, dots[i+1].x, dots[i+1].y);
        }
    }
    
    sinBut = new Button(1);
    cosBut = new Button(2);
    tanBut = new Button(3);
    
    sinBut.init();
    cosBut.init();
    tanBut.init();
}

function draw() {
    background(0);
    if(moving == 1) {
        amp += movingSpeed;
        if(amp >= destAmp) {
            moving = 0;
        }
    }
    if(moving == 2) {
        amp -= movingSpeed;
        if(amp <= destAmp) {
            moving = 0;
        }
    }
    if(wave == 1) {
        for(i=0;i<dots.length;i++) {
            dots[i].y = amp * sin(2*dots[i].x - shift) + (windowHeight / 2);
            dots[i].draw();
        }
    } else if(wave == 2) {
        for(i=0;i<dots.length;i++) {
            dots[i].y = amp * cos(2*dots[i].x - shift) + (windowHeight / 2);
            dots[i].draw();
        }
    } else if(wave == 3) {
        for(i=0;i<dots.length;i++) {
            dots[i].y = amp * tan(2*dots[i].x - shift) + (windowHeight / 2);
            dots[i].draw();
        }
    }
    for(i=0;i<dotAmount-1;i++) {
        if(i < dotAmount) {
            stroke(dots[i].color);
            strokeWeight(2);
            line(dots[i].x, dots[i].y, dots[i+1].x, dots[i+1].y);
        }
    }
    shift += shiftInc;
    sinBut.draw();
    cosBut.draw();
    tanBut.draw();
}
function mouseClicked() {
    destAmp = (windowHeight/2) - mouseY;
    if(destAmp > amp) {
        moving = 1;
    }
    if(destAmp < amp) {
        moving = 2;
    }
    if(sinBut.checkClick()) {
        wave = 1;
    } else if(cosBut.checkClick()) {
        wave = 2;
    } else if(tanBut.checkClick()) {
        wave = 3;
    }
}