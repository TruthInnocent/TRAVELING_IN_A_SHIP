var ship,shipimg
var sea,seaimg
function preload(){
shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg=loadImage("sea.png")


function setup(){
  createCanvas(400,400);
  ship=createSprite(0,200)
  ship.addAnimation(shipimg)
  sea=createSprite(400,400)
  sea.addImage(seaimg)
  sea.velocityY=-5
}

function draw() {
  background(sea);
 if (sea.x < 0) {
   sea.x=sea.width/2
 }
}