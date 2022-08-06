function drawTriangle() {

  this.canvas = document.createElement('canvas');
  this.canvas.setAttribute('width' ,'100px');

  if (this.canvas.getContext) {
    this.ctx = this.canvas.getContext('2d');

    this.ctx.beginPath();
    this.ctx.moveTo(75,75);
    this.ctx.lineTo(10,75);
    this.ctx.lineTo(10,25);
    this.ctx.fill();

    document.body.appendChild(this.canvas);
  }
}

function drawSquare() {
    
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('width' ,'100px');
    
    if (this.canvas.getContext) {
        this.ctx = this.canvas.getContext('2d');

        this.ctx.fillRect(20, 10, 90, 90);

        document.body.appendChild(this.canvas);
    }
}

let triangle  = new drawTriangle();
let square = new drawSquare();
let triangle2  = new drawTriangle();
let square2 = new drawSquare();