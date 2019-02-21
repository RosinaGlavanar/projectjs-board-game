var Rectangle = function(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    
    this.name = null;
};

Rectangle.prototype.finish  = function(endX, endY){
    this.width = (endX - this.x);
    this.height = (endY - this.y);
}

Rectangle.prototype.render = function(){
    CanvasManager.context.beginPath();
    CanvasManager.context.strokeStyle = "red";
    CanvasManager.context.fillStyle = this.color;
    CanvasManager.context.rect(this.x, this.y, this.width, this.height)
    CanvasManager.context.fill();
    CanvasManager.context.stroke();
    CanvasManager.context.closePath();
};

var collRect = [];
var pl1 = 2;
var pl2 = 5;
var color = null
var width = 70;
    for(let row = 0; row < 7; row++){
        color = "#FCCAC2"
        for(let col = 0; col < 9; col++){
            if(pl1 > row || row >= pl2){
                color = ((row * 9 + col) % 2) ? '#fff' : '#000';
            }
            collRect.push(new Rectangle((width * col), (width * row), width, width, color));
        }
    }

for(let index = 0; index < collRect.length; index++){
    collRect[index].render();
}