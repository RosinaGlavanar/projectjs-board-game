var Rectangle = function(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.name = null;
};

Rectangle.prototype.finish = function(endX, endY) {
  this.width = endX - this.x;
  this.height = endY - this.y;
};

Rectangle.prototype.render = function() {
  CanvasManager.context.beginPath();
  CanvasManager.context.strokeStyle = "#000000";
  CanvasManager.context.fillStyle = this.color;
  CanvasManager.context.rect(this.x, this.y, this.width, this.height);
  CanvasManager.context.fill();
  CanvasManager.context.stroke();
  CanvasManager.context.closePath();
};