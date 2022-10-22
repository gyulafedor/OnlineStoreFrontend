export class CartElement{
    gameName: string;
    gameDescription: string;
    gamePrice: number;

    constructor(gameName: string, gameDescription: string, gamePrice: number){
        this.gameName = gameName;
        this.gameDescription = gameDescription;
        this.gamePrice = gamePrice;
    }
}