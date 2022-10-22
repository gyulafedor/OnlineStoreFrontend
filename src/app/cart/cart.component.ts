import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { CartElement } from 'src/models/cartElement';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dataSource: MatTableDataSource<CartElement>;
  entries = [] as Array<CartElement>;  
  getUserByIdUrl: string = environment.getUserByIdUrl;

  processedColumns = ['gameName', 'gameDescription', 'gamePrice'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCart();
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadCart(){
    let userEmail = sessionStorage.getItem("email");
    let urlToGetUsersCart = this.getUserByIdUrl.concat("/" + userEmail);
    this.http.get(urlToGetUsersCart).subscribe(
      (gamesInCart: any) => {
        for(var i = 0; i < gamesInCart.length; i++){
          var currentGame = gamesInCart[i];
          var processEntry = new CartElement(currentGame.gameName, currentGame.gameDescription, currentGame.gamePrice);
          console.log("pe: " + processEntry.gameName);
          this.entries.push(processEntry);
        }
        this.dataSource = new MatTableDataSource(this.entries);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }

    )
  }

}
