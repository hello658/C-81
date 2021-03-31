canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="skyblue";
ctx.lineWidth=2;
ctx.arc(200,200,40,0,Math.PI*2);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle="skyblue";
ctx.lineWidth=2;
ctx.arc(x,y,40,0,Math.PI*2);
ctx.stroke();
}