import Game from './BowlingGame';

describe("BowlingGame", () => {
    it("Deberia el score iniciar en 0", () => {
        const game = new Game();
      expect(game.getscore()).toEqual(0);
    });
    it("Deberia todos los espacios de rolls empezar en 0", () => {
        const game = new Game();
        for (let i = 0; i < 20; i++) {
            expect(game.getrolls()[i]).toEqual(0);
        }
    });
    it("deberia la suma de todos los rolls es el score", () => {
        const game = new Game();
        let suma=0; 
        game.llenar();
        game.calcularscore();
        for (let i = 0; i < 20; i++) {
            suma+=game.getrolls()[i];
        }
        expect(game.getscore()).toEqual(suma);
    });
    it("deberia cuando un frame suma 10, sin que el segundo sea 0, que el frame tome un roll del siguiente frame", () => { 
        const game = new Game();
        game.rolls[0]=1;
        game.rolls[1]=9;
        game.rolls[2]=5;
        game.calcularscore();
        expect(game.getscore()).toEqual(20);
    });
});
    
