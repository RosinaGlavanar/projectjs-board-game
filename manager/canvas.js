var CanvasManager = {};

CanvasManager.canvas = null;
CanvasManager.context = null;
CanvasManager.layerShapeCollection = [];
CanvasManager.shapeReference = null;

CanvasManager.init = function(element){
    this.canvas = document.getElementById(element);
    this.context = this.canvas.getContext('2d')
};