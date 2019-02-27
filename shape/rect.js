var Rectangle = function(x, y, width, height, symbol, color){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.symbol = symbol;

  this.name = null;
};

Rectangle.prototype.finish = function(endX, endY){
  this.width = endX - this.x;
  this.height = endY - this.y;
};

Rectangle.prototype.render = function(){
  RectManager.context.beginPath();
  RectManager.context.strokeStyle = "#000000";
  RectManager.context.fillStyle = this.color;
  RectManager.context.rect(this.x, this.y, this.width, this.height);
  RectManager.context.fill();
  RectManager.context.stroke();
  RectManager.context.closePath();
};

Rectangle.prototype.addSymbol = function(symbol){
  RectManager.context.font = "35px Courier New";
  RectManager.context.fillStyle = "#DD2C00";
  RectManager.context.fillText(
    this.symbol,
    this.x + this.width / 2,
    this.y + this.width / 2,
    150
  );
};

Rectangle.prototype.cellContainsCoordinates = function(x, y){
  return(
    x > this.x &&
    x < this.x + this.width &&
    y > this.y &&
    y < this.y + this.width
  );
};