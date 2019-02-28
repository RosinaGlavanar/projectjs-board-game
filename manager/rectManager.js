const MAX_OBSTACLES = 5;
const MIN_OBSTACLES = 1;

var RectManager = {};

RectManager.canvas = null;
RectManager.context = null;
RectManager.collRect = [];
RectManager.pl1Territory = 2;
RectManager.pl2Territory = 5;
RectManager.color = null;
RectManager.width = 70;
RectManager.col = 9;
RectManager.row = 7;
RectManager.count = 1;

RectManager.init = function(element){
  this.canvas = document.getElementById(element);
  this.context = this.canvas.getContext("2d");
};

RectManager.generateBoard = function(){
  for(let i = 0; i < this.row; i++){
    this.color = "#ffc1e3";
    for(let j = 0; j < this.col; j++){
      var randomList = this.generateRandomNumberList();
      for(let index = 0; index < randomList.length; index++){
        if(randomList[index] == this.count){
          this.color = "#000";
        }
      }
      this.count++;
      if(this.pl1Territory > i || i >= this.pl2Territory){
        this.color = (i * 9 + j) % 2 ? "#fff" : "#f48fb1";
      }
      this.collRect.push(
        new Rectangle(
          this.width * j,
          this.width * i,
          this.width,
          this.width,
          null,
          this.color
        )
      );
      this.color = "#ffc1e3";
    }
  }
  this.draw();
};

RectManager.draw = function(){
  for(let index = 0; index < this.collRect.length; index++){
    this.collRect[index].render();
  }
  this.clickOnCell();
};

RectManager.clickOnCell = function(){
  var boardRows = this.collRect;
  this.canvas.addEventListener("click", function(e){
    for(var i = 0; i < boardRows.length; i++){
      if(boardRows[i].cellContainsCoordinates(e.clientX, e.clientY)){
        if(selectedItems != null){
          if(boardRows[i].symbol == null){
            if(i > 44 || i <= 17){
            boardRows[i].symbol = selectedItems;
            boardRows[i].addSymbol();
            }
          }else{
            console.log("place taken");
          }
        }
      }
    }
  });
};

RectManager.generateRandomNumberList = function(){
  var allCell = this.col * this.row;
  var territoryBattle = allCell - 2 * this.col - 2 * this.col;

  var arrayOfObstacles = [];
  var numberOfObstacles =
    Math.floor(Math.random() * MAX_OBSTACLES) + MIN_OBSTACLES;

  for(let index = 0; index < numberOfObstacles; index++){
    arrayOfObstacles.push(
      Math.floor(Math.random() * territoryBattle) + 2 * this.col
    );
  }

  return arrayOfObstacles;
};
