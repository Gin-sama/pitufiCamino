let tras =0
let sca =1
let cam=175
let sprite
let walk =-200
let colum =0
let speedX = 0
let speedY = 0
const size = 128
function preload (){
	sprite = loadImage('images/sprite.jpg')
}

function setup(){
	frameRate(60)
	createCanvas(windowWidth,windowHeight);
}

function camino(){
	push()
	stroke('cyan')
	fill('cyan')
	rect(0,cam,width,100)
	pop()
}

function draw(){
	background('silver')
	translate(tras,0)
	scale(sca,1)

	camino()

	/*camino(175)	
	camino(303)
	camino(431)
	camino(559)
	camino(686)*/

	copy(sprite,speedX,speedY,128,128,walk,colum,256,256)
	speedX+=size
	walk+=6
	if (walk>=width) {
		walk=-200
		colum+=128
		cam+=128
		sca=-sca
		if (sca==-1) {
			tras=width
		}else{
			tras=0
		}
		
	}
	if (colum>=height-128) {
			colum=0
			cam=175
		}
	if (speedX==512) {
		speedX=0
		speedY+=size
	}
	if (speedY==512) {
		speedY=0
	}


}
