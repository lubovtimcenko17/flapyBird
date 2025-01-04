let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 700;
canvas.height = 500;

 



ctx.fillStyle = 'green';
ctx.lineWidth = 4
ctx.moveTo(90, 380);
ctx.lineTo(164, 250);
ctx.lineTo(240, 430);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'green';
ctx.lineWidth = 4
ctx.moveTo(90,280);
ctx.lineTo(167, 160);
ctx.lineTo(240, 300);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'green';
ctx.lineWidth = 4
ctx.moveTo(90, 500);
ctx.lineTo(167, 350);
ctx.lineTo(240, 589);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'red';
 ctx.beginPath();
 ctx.arc(190, 330, 10, 0, 2 * Math.PI);
 ctx.closePath();
 ctx.fill();

ctx.fillStyle = 'yellow';
 ctx.beginPath();
 ctx.arc(130, 230, 10, 0, 2 * Math.PI);
 ctx.closePath();
 ctx.fill();

 ctx.fillStyle = 'pink';
 ctx.beginPath();
 ctx.arc(130, 330, 10, 0, 2 * Math.PI);
 ctx.closePath();
 ctx.fill();