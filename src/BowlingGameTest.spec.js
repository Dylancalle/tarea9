const Game = require('./BowlingGame.js'); 

describe("BowlingGame", () => {
    it("Deberia el score iniciar en 0", () => {
        const game = new Game();
      expect(game.getscore()).toEqual(0);
    });
  });
  

