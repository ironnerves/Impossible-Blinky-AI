let playerx
let playery
let player_speed
let blinkyx
let blinkyy
let blinky_speed
let differencex
let differencey
let reset_button
// let hack_button
// let hack_button_player_speed_descriptor
// let hack_button_player_speed_input
function setup() {
  createCanvas(400, 400)
  noStroke()
  playerx = round(random(400))
  playery = round(random(400))
  player_speed = 1
  blinkyx = round(random(400))
  blinkyy = round(random(400))
  blinky_speed = 1
  reset_button = createButton("Click To Reset")
  reset_button.mousePressed(reset_button_function)
  // hack_button = createButton("Click To Enable Hacks")
  // hack_button.mousePressed(hack_button_function)
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
    if (keyCode === UP_ARROW && keyIsPressed === true) {
      playery = playery - player_speed
    }
    if (keyCode === DOWN_ARROW && keyIsPressed === true) {
      playery = playery + player_speed
    }
    if (keyCode === LEFT_ARROW && keyIsPressed === true) {
      playerx = playerx - player_speed
    }
    if (keyCode === RIGHT_ARROW && keyIsPressed === true) {
      playerx = playerx + player_speed
    }
    if (differencex != 0) {
      if (differencex < -1) {
        blinkyx = blinkyx - blinky_speed
      } else if (differencex > 0) {
        blinkyx = blinkyx + blinky_speed
      }
    }
    if (differencey != 0) {
      if (differencey < -1) {
        blinkyy = blinkyy - blinky_speed
      } else if (differencey > 0) {
        blinkyy = blinkyy + blinky_speed
      }
    }
  }
}

function reset_button_function() {
  playerx = round(random(400))
  playery = round(random(400))
  blinkyx = round(random(400))
  blinkyy = round(random(400))
}

// function hack_button_function(){
//   hack_button_player_speed_descriptor = createP("Type Your Desired Speed Of Pac-Man And Then Press Enter. It Also Turns You Invisible")
//   hack_button_player_speed_input = createInput("1")
//   player_speed = hack_button_player_speed_input.value()
// }