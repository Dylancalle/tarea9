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
    it("deberia cuando el primer roll es 10, siendo el segundo 0, que el frame tome dos roll siguientes", () => { 
        const game = new Game();
        game.rolls[0]=10;
        game.rolls[1]=0;
        game.rolls[2]=4;
        game.rolls[3]=4;
        game.calcularscore();
        expect(game.getscore()).toEqual(26);
    });
    it("deberia cuando el penultimo y ultimo roll suman 10, tendran solo un tiro adicional", () => { 
        const game = new Game();
        game.rolls[18]=9;
        game.rolls[19]=1;
        if(game.rolls[18]+ game.rolls[19]==10)
        {
            game.rolls[20]=7;
        }
        game.calcularscore();
        expect(game.getscore()).toEqual(17);
    });
});
    