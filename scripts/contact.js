



function drawTriangle(element){

    let dpi = window.devicePixelRatio;
    var canvas = document.getElementById(element);
    console.log("THIS IS: " + canvas);
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

    // let t_width = .96 * c_width;
    // the triangle
    t.beginPath();
    t.moveTo(0, 0);
    t.lineTo(c_width, 0);
    t.lineTo(c_width/2, (c_width/2) * Math.sqrt(3));

    t.closePath();

    // let offset = t_width * .02;

    // t.beginPath()
    // t.moveTo(2*offset, offset);
    // t.lineTo(t_width + 2*offset, offset);
    // t.lineTo(t_width/2 + 2*offset, (t_width/2) * Math.sqrt(3) + offset);
    // t.closePath();

    // the outline
    t.lineWidth = 2;
    t.strokeStyle = '#FFFFFF';
    t.stroke();
    
    // the fill color
    // t.fillStyle = "#FFCC00";
    // t.fill();
}

window.onload = function() {
    initNavBar();
    // drawTriangle('triangle');
    // drawTriangle('triangle2');
}



function reveal(){
    let a = 'denali';
    let b = 'chin@';
    let c = 'hello'
    let d = 'g';
    let e = 'mail';
    let f = '.com';

    let element = document.getElementById('mail');

    element.textContent = a+b+d+e+f;
    element.style.border = 'solid rgba(0,0,0,0) 1px';

}