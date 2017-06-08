/*
Created by Bradley Harker and Elijah Wilson
Design Lead - Elijah Wilson
Progamming Lead - Bradley Harker
*/
function Allele(person) {
    this.color1 = color(255,255,255);
    this.color2 = color(255,255,255);
    this.gene1 = random([1,2]);
    this.gene2 = random([1,2]);
    this.person = person;
    this.xPos = 0;
    this.yPos = 0;
    this.made = true;
    /*
    Gene Key - 
    1 = Dominant
    2 = Recessive
    
    Color Key -
    Dominant = Red
    Recessive = Blue
    
    Person Key -
    1 = Parent 1
    2 = Parent 2
    3 = Child
    */
    
    this.setColor = function() {
        if(this.made == true) {
            //Detirmine Color for gene 1
            if(this.gene1 == 1) {
                this.color1 = color(255,0,0);
            } else if(this.gene1 == 2) {
                this.color1 = color(0,0,255);
            }
        
            //Detirmine color for gene 2
            if(this.gene2 == 1) {
                this.color2 = color(255,0,0);
            } else if(this.gene2 == 2) {
                this.color2 = color(0,0,255);
            }
        } else if(this.made == false) {
            this.color1 = color(255, 140, 26);
            this.color2 = color(255, 140, 26);
        }
    }
    
    this.draw = function() {
        noStroke();
        //Detirmine who this is and where to draw them
        if(this.person == 1) {
            this.xPos = windowWidth/4;
            this.yPos = windowHeight/3;
            
            fill(this.color1);
            ellipse(this.xPos - 50, this.yPos, 50, 50);
            fill(this.color2);
            ellipse(this.xPos + 50, this.yPos, 50, 50);
        } else if(this.person == 2) {
            this.xPos = (windowWidth/4) * 3;
            this.yPos = windowHeight/3;
            
            fill(this.color1);
            ellipse(this.xPos - 50, this.yPos, 50, 50);
            fill(this.color2);
            ellipse(this.xPos + 50, this.yPos, 50, 50);
        } else if(this.person == 3) {
            this.xPos = windowWidth/2;
            this.yPos = (windowHeight/3) * 2;
            
            fill(this.color1);
            ellipse(this.xPos - 50, this.yPos, 50, 50);
            fill(this.color2);
            ellipse(this.xPos + 50, this.yPos, 50, 50);
        }
    }
}