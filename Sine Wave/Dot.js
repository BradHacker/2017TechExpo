/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function Dot() {
    this.x;
    this.y;
    this.color = color(255,255,255);
    
    this.draw = function() {
        noStroke();
        fill(this.color);
        ellipse(this.x,this.y,10,10);
    }
}