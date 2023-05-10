var canva = document.getElementById("screen");
var ctx = canva.getContext("2d");

class limg{
    imag
    constructor(location,callback = function(){console.log("loaded "+location);}){
        this.imag = new Image();
        this.imag.src = location;
        this.imag.onload = callback;
    }
    draw(x,y){
        ctx.drawImage(this.imag,x,y);
    }
}

