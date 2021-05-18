function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(230);
  // Color + brush settings
  noFill()
  strokeWeight(7)

  // Blue circle
  stroke(30, 120, 230)
  ellipse(100, 100, 100, 100)

  // Yellow circle
  stroke("gold")
  ellipse(157, 150, 100, 100)

  // Black circle
  stroke(0, 0, 0)
  ellipse(214, 100, 100, 100)

  // Green circle
  stroke("forestGreen")
  ellipse(271, 150, 100, 100)

  // Red circle
  stroke(230, 30, 30)
  ellipse(328, 100, 100, 100)
}
