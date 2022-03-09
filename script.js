var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
ctx.canvas.width = 1920;
ctx.canvas.height = 1080;
ctx.strokeStyle = "#8a0303";
ctx.lineWidth = 4;

let Mountain = new Image();
Mountain.src = "images/background/Mountain.png";

let Place = new Image();
Place.src = "images/background/place.png";

let Hero = new Image();
Hero.src = "images/hero/hero.png";

function random(min, max) {
  return Math.random() * (max - min) + min;
}



setInterval(function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(Mountain, -160, canvas.height + 30 - Mountain.height);
  ctx.drawImage(Place, 0, canvas.height-Place.height);
  spriteSheet(Hero,9,3,100,canvas.height-120,0)
},1000);
