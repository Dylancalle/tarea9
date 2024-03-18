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
  }
  
  module.exports = Game;