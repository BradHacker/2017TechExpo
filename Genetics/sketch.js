var allele1;
var allele2;
var allele3;
var parent1;
var parent2;
var child;
var partnerBut;
var childBut;
var growUpBut;
var parent1GeneChoice;
var parent2GeneChoice;

function setup() {
    createCanvas(windowWidth,windowHeight);
    allele1 = new Allele(1);
    allele1.setColor();
    allele2 = new Allele(2);
    allele2.setColor();
    allele3 = new Allele(3);
    allele3.setColor();
    
    parent1 = new Person(allele1, 1);
    parent1.setColor();
    parent2 = new Person(allele2, 2);
    parent2.setColor();
    child = new Person(allele3, 3);
    child.setColor();
    
    partnerBut = new PartnerButton();
    childBut = new ChildButton();
    growUpBut = new GrowUpButton();
    
    child.made = false;
    allele3.made = false;
}

function draw() {
    background(color(255, 140, 26));
    
    //Draw Parent 1 on Left
    parent1.setColor();
    parent1.draw();
    allele1.setColor();
    allele1.draw();
    
    //Draw Parent 2 on Right
    parent2.setColor();
    parent2.draw();
    allele2.setColor();
    allele2.draw();
    
    //Draw Child in Middle
    child.setColor();
    child.draw();
    allele3.setColor();
    allele3.draw();
    
    //Draw Buttons
    partnerBut.draw();
    childBut.draw();
    growUpBut.draw();
}

function mousePressed() {
    //Generate New Partner
    if(partnerBut.checkClick()) {
        allele2.gene1 = random([1,2]);
        allele2.gene2 = random([1,2]);
        parent2.gene1 = allele2.gene1;
        parent2.gene2 = allele2.gene2;
        
        child.made = false;
        allele3.made = false;
    }
    
    //Generate Child From Parents
    if(childBut.checkClick()) {
        parent1GeneChoice = random([1,2]);
        parent2GeneChoice = random([1,2]);
        
        if(parent1GeneChoice == 1) {
            allele3.gene1 = parent1.gene1;
        } else if (parent1GeneChoice == 2) {
            allele3.gene1 = parent1.gene2;
        }
        
        if(parent2GeneChoice == 1) {
            allele3.gene2 = parent2.gene1;
        } else if (parent2GeneChoice == 2) {
            allele3.gene2 = parent2.gene2;
        }
        
        child.gene1 = allele3.gene1;
        child.gene2 = allele3.gene2;
        
        child.made = true;
        allele3.made = true;
    }
    
    //Make the child be parent 1
    if(growUpBut.checkClick()) {
        if(child.made == true && allele3.made == true) {
            /*console.log("Child - Gene1 = " + child.gene1 + ", Gene2 = " + child.gene2);
            console.log("Child Allele - Gene1 = " + allele3.gene1 + ", Gene2 = " + allele3.gene2);
            console.log("Adult Before - Gene1 = " + parent1.gene1 + ", Gene2 = " + parent1.gene2);
            console.log("Adult Allele Before - Gene1 = " + allele1.gene1 + ", Gene2 = " + allele1.gene2);*/
            allele1.gene1 = allele3.gene1;
            allele1.gene2 = allele3.gene2;
            parent1.gene1 = allele1.gene1;
            parent1.gene2 = allele1.gene2;
            /*console.log("Adult After - Gene1 = " + parent1.gene1 + ", Gene2 = " + parent1.gene2);
            console.log("Adult Allele After - Gene1 = " + allele1.gene1 + ", Gene2 = " + allele1.gene2);*/
        
            child.made = false;
            allele3.made = false;
        }
    }
}