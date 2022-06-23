var mouseEvent="empty";
var last_position_of_x , last_position_of_y;
var canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "Aqua";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent= "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
var current_position_of_x = e.clientX - canvas.offsetLeft;
var current_position_of_y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("current position of x and y");
    console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
    ctx.arc(current_position_of_x , current_position_of_y , 40 , 0 , 2*Math.PI);
    ctx.stroke();
}
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent= "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent= "mouseleave";
}