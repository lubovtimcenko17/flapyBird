let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 256
canvas.height = 512

let bird = new Image()
bird.src = "img/bird.png"

let back = new Image()
back.src = "img/back.png"	

let pipeBottom = new Image()
pipeBottom.src = "img/pipeBottom.png"	

let pipeUp = new Image()
pipeUp.src = "img/pipeUp.png"	

let road = new Image()
road.src = "img/road.png"	

let fly = new Audio()
fly.src = "audio/fly.mp3"

let score_audio = new Audio()
score_audio.src = "audio/score.mp3"

let xPos = 10
let yPos = 150

let velY = 10
let gravity = 0.2

function draw() {
   ctx.drawImage(back, 0 , 0)
   ctx.drawImage(bird, xPos, yPos)

if (yPos >= canvas.height) {
	location.reload()
}

   velY += gravity
   yPos += velY 
}

canvas.addEventListener("mousedown", moveUp)

function moveUp(){
	velY -=4
	flu.play()
}

setInterval(draw, 20)
