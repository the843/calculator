const calculatorCanvas = document.getElementById('calculatorCanvas');
const canvasWidth = calculatorCanvas.width = 300;
const canvasHeight = calculatorCanvas.height = 20;
const ctx = calculatorCanvas.getContext('2d');

class Anim {
    constructor(x ,y ,width ,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.clearRect(0, 0, calculatorCanvas.width, calculatorCanvas.height);
        ctx.fillStyle = '#ffe0b9ff';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    animation(){
        if(this.x - this.width > canvasWidth  ) this.x = 0 - this.width;
        this.x += 4;


        this.draw();
        requestAnimationFrame(this.animation.bind(this));
    }
}
let animation = new Anim(0,0,50,50);
animation.animation();