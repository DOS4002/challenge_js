var product = document.getElementById("nav-bar-product");
product.addEventListener("mouseover", function() {
    var triangle = document.querySelector("#trianguloCanvas");
    triangle.classList.add("hide");

    
}   );


var canvas = document.getElementById('trianguloCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(100, 10);
context.lineTo(10, 190); 
context.lineTo(190, 190); 
context.closePath();
context.fillStyle = 'white'; 
context.fill();