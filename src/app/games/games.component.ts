import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Game } from 'src/models/game';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {dataSource: MatTableDataSource<Game>;
  entries = [] as Array<Game>;
  allGamesUrl: string = environment.allGamesUrl;

  processedColumns = ['name', 'description', 'developer', 'publisher', 'price', 'addToCart'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.loadDataToTable();
  }


  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();  
  }

  loadDataToTable(){
    this.http.get(this.allGamesUrl).subscribe(
      (availableGames: any) => {
        console.log(availableGames);
        for(var i = 0; i < availableGames.length; i++){
          var e = availableGames[i];
          var processEntry = new Game(e.name, e.description, e.developer, e.publisher, e.price);
          console.log("pe: " + processEntry.name);
          this.entries.push(processEntry);
        }
        this.dataSource = new MatTableDataSource(this.entries);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  addToCart(){
    let userId = sessionStorage.getItem("email");
    
  }
}
