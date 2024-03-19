class Game {
  constructor() {
    this.score = 0;
    this.rolls = new Array(21).fill(0);
  }
  getscore() {
    return this.score;
  }
  getrolls() {
      return this.rolls;
    }
  llenar(){
      for (let i = 0; i < 20; i++) {
          this.rolls[i]=1;
      }
  }
  calcularscore(){
      for (let i = 0; i < 20; i=i+2) {
          this.score=this.score+this.rolls[i];
          this.score=this.score+this.rolls[i+1];
          if(i==18)
          {
            if(this.rolls[i]+this.rolls[i+1]==10)
            {
              this.score+=this.rolls[i+2];
            }
          }else{
          if(this.rolls[i]+this.rolls[i+1]==10 && this.rolls[i]!=10)
          {
            this.score+=this.rolls[i+2];
          }
          if(this.rolls[i]==10)
          {
            this.score+=this.rolls[i+2];
            if(this.rolls[i+2]==10)
            {
              this.score+=this.rolls[i+4];
            }else{
              this.score+=this.rolls[i+3];
            }
          }
        }
      }
      
  }
}

module.exports = Game;

