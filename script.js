let playerx
let playery
let blinkyx
let blinkyy
let differencex
let differencey
let button1
function setup() {
  createCanvas(400, 400)
  playerx = round(random(400))
  playery = round(random(400))
  blinkyx = round(random(400))
  blinkyy = round(random(400))
  button1 = createButton("Click To Reset")
  button1.mousePressed(reset_button)
}

function draw() {
  background(0, 0, 0)
  fill(255, 255, 0)
  rect(playerx, playery, 50, 50)
  fill(255, 0, 0)
  rect(blinkyx, blinkyy, 50, 50)
  differencex = playerx - blinkyx
  differencey = playery - blinkyy
  if (differencex < 50 && differencey < 50 && differencex > -50 && differencey > -50) {
    fill(255, 0, 0)
    textSize(50)
    text("YOU LOSE", 50, 50)
  } else {
    if (keyCode === UP_ARROW && keyIsPressed === true){
      playery = playery - 1
    }
    if (keyCode === DOWN_ARROW && keyIsPressed === true){
      playery = playery + 1
    }
    if(keyCode === LEFT_ARROW && keyIsPressed === true){
      playerx = playerx - 1
    }
    if(keyCode === RIGHT_ARROW && keyIsPressed === true){
      playerx = playerx + 1
    }
    if (differencex != 0) {
      if (differencex < -1) {
        blinkyx = blinkyx - 1
      } else if (differencex > 0) {
        blinkyx = blinkyx + 1
      }
    }
    if (differencey != 0) {
      if (differencey < -1) {
        blinkyy = blinkyy - 1
      } else if (differencey > 0) {
        blinkyy = blinkyy + 1
      }
    }
  }
}

function reset_button() {
  playerx = round(random(255))
  playery = round(random(255))
  blinkyx = round(random(255))
  blinkyy = round(random(255))
}