



function drawTriangle(){

    let dpi = window.devicePixelRatio;
    var canvas = document.getElementById('triangle');
    var t = canvas.getContext("2d");

    //get CSS height and width
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let c_height = style_height * dpi;
    let c_width = style_width * dpi;
    //scale the canvas
    canvas.setAttribute('height', c_height);
    canvas.setAttribute('width', c_width);

    // the triangle
    t.beginPath();
    t.moveTo(0, 0);
    t.lineTo(c_width, 0);
    t.lineTo(c_width/2, (c_width/2) * Math.sqrt(3));

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


