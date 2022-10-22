export class CartElement{
    userEmail: string;
    gameName: string;
    gamePrice: number;

    constructor(userEmail: string, gameName: string, gamePrice: number){
        this.userEmail = userEmail;
        this.gameName = gameName;
        this.gamePrice = gamePrice;
    }
}