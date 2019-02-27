
const MAX_NUMBER_OF_BARRIER = 5;
const MIN_NUMBER_OF_BARRIER = 1;

var RectManager = {};

RectManager.collRect = [];
RectManager.pl1Territory = 2;
RectManager.pl2Territory = 5;
RectManager.color = null;
RectManager.width = 70;
RectManager.col = 9;
RectManager.row = 7;
RectManager.count = 1;

RectManager.generateBoard = function() {
    for (let i = 0; i < row; i++) {
        this.color = "#e8eaf6";
        for (let j = 0; j < col; j++) {
          var randomList = generateRandomNumberList();
          for (let index = 0; index < randomList.length; index++) {
            if (randomList[index] == count) {
                this.color = "#000000";
            }
          }
      
          count++;
          if (pl1Territory > i || i >= pl2Territory) {
            this.color = (i * 9 + j) % 2 ? "#fff" : "#ec407a";
          }
          collRect.push(new Rectangle(width * j, width * i, width, width, this.color));
          this.color = "#e8eaf6";
        }
      }      
};

for (let index = 0; index < collRect.length; index++) {
  collRect[index].render();
}



function generateRandomNumberList() {
  var allCell = col * row;
  var territoryBattle = allCell - 2 * col - 2 * col;

  var arrayOfPlaceBarriesrs = [];
  var numberOfBarriers =
    Math.floor(Math.random() * MAX_NUMBER_OF_BARRIER) + MIN_NUMBER_OF_BARRIER;

  for (let index = 0; index < numberOfBarriers; index++) {
    arrayOfPlaceBarriesrs.push(
      Math.floor(Math.random() * territoryBattle) + 2 * col
    );
  }



  return arrayOfPlaceBarriesrs;
}
