export class Game{
    name: string;
    description: string;
    developer: string;
    publisher: string;
    price: number;

    constructor(gameName: string, gameDescription: string, gameDeveloper: string, gamePublisher: string, gamePrice: number){
        this.name = gameName;
        this.description = gameDescription;
        this.developer = gameDeveloper;
        this.publisher = gamePublisher;
        this.price = gamePrice;
    }
}