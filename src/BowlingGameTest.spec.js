const Game = require('./BowlingGame.js'); 
const game = new Game();
describe("BowlingGame", () => {
    it("Deberia el score iniciar en 0", () => {
      expect(game.getscore()).toEqual(0);
    });
    it("Deberia todos los espacios de rolls empezar en 0", () => {
        for (let i = 0; i < 20; i++) {
            expect(game.getrolls()[i]).toEqual(0);
        }
      });
  });