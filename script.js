let playerx
let playery
let blinkyx
let blinkyy
let differencex
let differencey
function setup() {
  createCanvas(400, 400)
  playerx = round(random(400))
  playery = round(random(400))
  blinkyx = round(random(400))
  blinkyy = round(random(400))
}

function draw() {
  background(0, 0, 0)
  fill(255, 255, 0)
  rect(playerx, playery, 50, 50)
  fill(255, 0, 0)
  rect(blinkyx, blinkyy, 50, 50)
  differencex = playerx - blinkyx
  differencey = playery - blinkyy
  if (differencex === 0 && differencey === 0) {
    fill(255, 0, 0)
    textSize(50)
    text("YOU WIN",50,50)
  }else{
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