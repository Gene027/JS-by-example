
//canvas is a means for drawing graphics

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
/*
//DRAW LINES
context.strokeStyle = "purple"; //line color
context.lineWidth = 10;  //line thickness
context.beginPath();  //starts drawing
context.moveTo(0, 0);  //point to a cordinate to start
context.lineTo(250, 250);  //since we declare 500*500 in html as size, 250*250 is mid point
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();  //this method now draw all of the above #end drawing
*/
/*
//DRAW TRIANGLE
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 10;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();  //fills image
*/
/*
//DRAW RECTANGLE
context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250); //quick draw rectangle (startX, startY, sizeX, sizeY)

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);
*/
/*
//DRAW CIRCLE
//(x, y, r, sAngle, eAngle, counterclockwise) // starting anggle 'sAngle' and ending angle are in radiants, counterclockwise is bool
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/
//DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2); // (text, startX, startY)
