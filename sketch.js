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
//background(0);

orbitControl();
  rotateY(.002);
  rotateX(.001)

//r = map(mouseX, 248,131,121,0)
//g = map(mouseX, 30, 600, 255, 20)
//b = map(mouseY, 50, 600, 255, 0)
//background(r, g, b);

  noFill()
  stroke(100)

 //moves ball around screen--
  //var x = sin(frameCount * 5) * 50
  //var y = cos(frameCount) * 50
  //var z = sin(frameCount * 4) * 50
  //translate(x, y, z)

  rotateX(frameCount)
  rotateY(frameCount)
  rotateZ(frameCount* .01)


  
  for (var i = 1; i < 360; i++) {
    push()

    var r = map(sin(i), -1, 1, 200, 50)
    var g = map(sin(i), -1, 1, 50, 200)
    var b = map(cos(i), -1, 0, 50, 200)

    stroke(r, g, b)

    rotateY(i/2)

    ellipse(0,0,400)
    //ellipse(mouseY, 0, 200)

    pop()
  }  


  }


