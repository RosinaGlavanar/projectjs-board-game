RectManager.init("canvas");
RectManager.generateBoard();
var elementKnight = document.getElementById("Kn");
var elementDwarf = document.getElementById("Dw");
var elementElf = document.getElementById("El");

var selectedItems = null;

elementKnight.addEventListener("click", function(){
  selectedItems = "K";
});
elementDwarf.addEventListener("click", function(){
  selectedItems = "D";
});
elementElf.addEventListener("click", function(){
  selectedItems = "E";
});
