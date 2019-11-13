

// VARIABLES
var defaultcolor = "green";
var drawingcolor = defaultcolor;
var defaultpenstatus = true;
var penstatus = defaultpenstatus
// below from https://www.w3schools.com/jsref/prop_win_innerheight.asp
var w = window.innerWidth;
var h = window.innerHeight;
// below two from lecture slides
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// The canvas element should have a width of 80% of the screen width and a height of 80% of the screen height. The element does NOT need to react if I resize the screen, but it should react if I resize the screen and hit reload.

canvas.width = (w * .8);
canvas.height = (h * .8);

// The program should react to a change in value in the color picker and use whatever color is chosen as the new color.
window.addEventListener("change", colorChanger);

function colorChanger(e){
  drawingcolor = document.getElementById("picker").value
}

// The program should react to the mouse moving within the canvas area and draw a circle of radius 10. The center of the circle should be exactly where the mouse cursor is located.

function draw(x,y){
  // https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_arc
  if (penstatus == true){
  ctx.beginPath();
  ctx.arc(x,y,10,0,2 * Math.PI)
  ctx.fillStyle = drawingcolor
  ctx.fill();
  }
}

myCanvas.addEventListener(
  'mousemove', function(e){
    console.log(e);
    var x = e.clientX-15;
    var y = e.clientY-15;
    draw(x,y);
  }
)

// The program should react to the b, r, g, and y keys - it should change the “pen” color to blue, red, green, or yellow respectively.

// Canvas clearing from https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing

window.addEventListener("keydown", keyStrokeResponder);

function keyStrokeResponder(e) {
  console.log(e);
  if (e.code == 'KeyB'){
    drawingcolor = "blue";
  } else if (e.code == 'KeyR') {
  	drawingcolor = "red";
  } else if (e.code == 'KeyG') {
  	drawingcolor = "green";
  } else if (e.code == 'KeyY') {
  	drawingcolor = "yellow";
  } else if (e.code == 'ArrowUp') {
    penstatus = false;
  } else if (e.code == 'ArrowDown') {
    penstatus = true;
  } else if (e.code == 'Space') {
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
  }
}
