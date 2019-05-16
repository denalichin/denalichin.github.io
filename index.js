




function drawTriangle(){
    var canvas = document.getElementById('testCanvas');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // canvas.width = 500;
    // canvas.height = 500;
    // canvas.style.width = 500;
    // canvas.style.height = 500;
    var t = canvas.getContext("2d");
    
    // the triangle
    t.beginPath();
    t.moveTo(0.5, 0.5);
    t.lineTo(500.5, 0.5);
    t.lineTo(250.5, 250 * Math.sqrt(3) + 0.5);

    t.closePath();
    
    // the outline
    t.lineWidth = 2;
    t.strokeStyle = '#FFFFFF';
    t.stroke();
    
    // the fill color
    // t.fillStyle = "#FFCC00";
    // t.fill();
}

drawTriangle();


