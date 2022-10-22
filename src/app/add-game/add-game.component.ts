import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game} from 'src/models/game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  addgamesUrl = environment.addGamesUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addGameToDatabase(game: {gameName: string, gameDescription: string, gameDeveloper: string, gamePublisher: string, gamePrice: number}): void{
    console.log("game: " + game);
    var newGame = new Game(game.gameName, game.gameDescription, game.gameDeveloper, game.gamePublisher, game.gamePrice);
    console.log("new game:" +newGame);
    this.http.post<Game>(this.addgamesUrl, newGame).subscribe();
  }

}
