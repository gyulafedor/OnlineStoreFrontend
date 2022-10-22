export class Game{
    gameId: number;
    gameName: string;
    gameDescription: string;
    gameDeveloper: string;
    gamePubliser: string;
    gamePrice: number;

    constructor(gameId: number, gameName: string, gameDescription: string, gameDeveloper: string, gamePublisher: string, gamePrice: number){
        this.gameId = gameId;
        this.gameName = gameName;
        this.gameDescription = gameDescription;
        this.gameDeveloper = gameDeveloper;
        this.gamePubliser = gamePublisher;
        this.gamePrice = gamePrice;
    }
}