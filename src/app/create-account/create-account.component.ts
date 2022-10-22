import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/models/users';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createUserUrl: string = environment.addUserUrl;
  allUsersUrl: string = environment.allUsersUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  onCreateAccount(user: {userEmail: string, userName: string, userPassword: string}): void{
    console.log(user);
    var newUser = new Users(user.userEmail, user.userName, user.userPassword);
    console.log(newUser);
    this.http.post<Users>(this.createUserUrl, newUser).subscribe();
    //this.http.post<User>(this.createUserUrl, newUser);
    /*this.http.get(this.allUsersUrl).subscribe(
      (availableGames: any) => {
        console.log(availableGames);
  } )*/
}
}
