function setup() {
  createCanvas(720, 400);
}



function draw() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
    background(0, 0, 230);

  noStroke();
  
  fill(252, 157, 3);
  triangle(50, 300, 100, 325, 50, 350) ;
  
  fill(252, 157, 3)
  ellipse(125, 325, 100, 50) ;
  
  fill(252, 157, 3);
  triangle(600, 250, 550, 275, 600, 300) ;
  
  fill(252, 157, 3)
  ellipse(525, 275, 100, 50) ;
  
  fill(252, 157, 3);
  triangle(650, 150, 600, 175, 650, 200) ;
  
  fill(252, 157, 3)
  ellipse(575, 175, 100, 50) ;
  
  fill(0)
  ellipse (150, 320, 10, 10) ;
  
  fill(0)
  ellipse (550, 170, 10, 10) ;
  
  fill (0)
  ellipse (500, 270, 10, 10) ;
  
  let q = 'a scene from david foster wallace'
  fill(252, 244, 3)
  text(q, 10, 10, 200, 80) ;
  
  if(mouseIsPressed) {
  
  fill(255);
  ellipse(520, 145, 10, 10)
  
  fill(255);
  ellipse(506, 125, 20, 20);
  
  fill(255);
  ellipse(488, 55, 200, 100);
  
   let t = 'what the hell is water?';
fill(50);
text(t, 425, 50, 200, 50); // Text wraps within text box
    
    } else {
     fill(255);
  ellipse(164, 280, 10, 10);
  
  fill(255);
  ellipse(175, 255, 20, 20);
  
  fill(255);
  ellipse(193, 210, 40, 40);
  
  fill(255);
  ellipse(200,116, 200, 100);
  
  let s = 'morning, boys. how\'s the water?';
fill(50);
text(s, 110, 110, 200, 50); // Text wraps within text box
      
  }
}