//(204,204,255) Periwinkle
//(64,224,208) turquoise
//(248,131,121) coral pink

//var r = 0
//var g = 0
//var b = 0


function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  angleMode(DEGREES)

  normalMaterial()

}


function draw() {
//add '//' to make a kaleidiscope
//background(248,131,121);

//orbitControl();
  //rotateY(.1);
  //rotateX(.1)

//makes BG change color depending on where cursor is on screen
r = map(mouseX, 50,600,0,250)
g = map(mouseX, 30, 600, 0, 135)
b = map(mouseY, 50, 600, 0, 125)
background(r, g, b);

  noFill()
  stroke(100)

 //moves ball around screen
  var x = sin(frameCount) * 200
  var y = cos(frameCount) * 200
  var z = sin(frameCount * .01) * 400
  translate(x, y, z)

  rotateX(frameCount*.01)
  rotateY(frameCount)
  rotateZ(frameCount)

 
  for (var i = 1; i < 360; i++) {
    push()

    var r = map(sin(i*1), -1, 1, 50, 200)
    var g = map(sin(i*1), -1, 1, 200, 50)
    var b = map(cos(i*1), -1, 1, 50, 200)

    stroke(r, g, b)

    rotateY(i/2)
    rotateX(i/2)

    ellipse(0,0,400)
  //Slinky effect
   //ellipse(mouseX,mouseY, 40, 40)
  
    pop()
  }  

  }


