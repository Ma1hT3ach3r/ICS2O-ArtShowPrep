let x = 0;
let y = 0;
let spacing =50;
//this makes less lines

function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {
  stroke("green");
  strokeWeight(1);
  
  if (random(1)<0.5) {
    strokeWeight(y/10);
    stroke(x%200,y%200,(x+y)%200);
    line(x+0, y+0, x+spacing, y+spacing);
    //varies the strokeweight by the y position scaled down 10
  } else {
    fill(x,y%100,(x+y)%100)
    noStroke();
    ellipse(x+0, y+spacing, spacing, spacing);
    //changed the line function to ellipses
  }
  
  x+=spacing;
  
  if(x>width){
    y+=spacing;
    x=0;
  }

}

//answer to question 1:
//answer to question 2: 
