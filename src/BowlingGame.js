class Game {
    constructor() {
      this.score = 0;
      this.rolls = new Array(20).fill(0);
    }
    getscore() {
      return this.score;
    }
    getrolls() {
        return this.rolls;
      }
    llenar(){
        for (let i = 0; i < 20; i++) {
            this.rolls[i]=i;
        }
    }
    calcularscore(){
        for (let i = 0; i < 20; i++) {
            this.score=this.score+this.rolls[i];
        }
    }
  }
  
  module.exports = Game;

  