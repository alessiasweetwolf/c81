canvas = document.getElementById("myCanvas");
color = "red";
ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(500, 200, 50,0 , 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color= document.getElementById("Color").value;
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientY- canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 50,0 , 2 * Math.PI);
    ctx.stroke();
}
function clearArea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}
