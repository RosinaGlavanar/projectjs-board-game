class Player{
  constructor(){
    this.figures = [
    new Knight(),
    new Knight(),
    new Elf(),
    new Elf(),
    new Dwarf(),
    new Dwarf()
    ];
  }
}

class fullGame {
  constructor(){
    this.game = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    this.gameOver = false;
}

init(){
    var step = 1;
    this.player1 = new Player();
    this.player2 = new Player();

    game();
}

game(){
    while(!this.gameOver){
        this.makeStep();
    }
    alert("Game Over");
}

makeStep(){
    this.gameOver = true;
}}

class Figure{
  attack(target){
    const randAttack = random();
    if(randAttack > target.armor){
    target.armor -= randAttack;
    }
}

health(){
    const randHeal = random();
    this.currentHealthPoints += randHeal;
    if(this.currentHealthPoints > this.healthPoints)
    this.currentHealthPoints = this.healthPoints;
}}

class Knight extends Figure{
  constructor(){
    this.attackPower = 8;
    this.armor = 3;
    this.maxHealthPoints = 15;
    this.currentHealthPoints = 15;
    this.movePoints = 1;
    this.speed = 1;
  }
}

class Elf extends Figure{
  constructor(){
    this.attackPower = 5;
    this.armor = 1;
    this.maxHealthPoints = 10;
    this.currentHealthPoints = 10;
    this.movePoints = 3;
    this.speed = 3;
    }
}

class Dwarf extends Figure{
  constructor(){
    this.attackPower = 6;
    this.armor = 2;
    this.maxHealthPoints = 12;
    this.currentHealthPoints = 12;
    this.movePoints = 2;
    this.speed = 2;
    }
}

// Правила за лекуване
var min = 1, max = 6;
function getRandomInt(min, max){
    return Math.floor(Math.random() * max) + min;  
}

var sumNumbersOfZar = getRandomInt(min, max) + getRandomInt(min, max) + getRandomInt(min, max);
    if(sumNumbersOfZar == currentHealthPoints){
        damage == 0; 
    }else if(sumNumbersOfZar == min * 3){
        damage == damage/2;
    }else{
        damage == damage;
    }