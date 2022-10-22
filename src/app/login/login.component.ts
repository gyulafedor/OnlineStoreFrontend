import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from 'src/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getUserByIdUrl: string = environment.getUserByIdUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onLogin(parameters: {userEmail: string, userPassword: string}){
    let userUrl = this.getUserByIdUrl.concat("/" + parameters.userEmail);
    this.http.get(userUrl).subscribe(
      (user: any) => {
        console.log(user);
        console.log("pe: " + parameters.userEmail + " \nue: " + user.password);
        if(parameters.userPassword == user.password /*&& parameters.userPassword == user.password*/){
          console.log("Sikeres if");
          sessionStorage.setItem("email", parameters.userEmail);
        }else{
          console.log("Else ág");
        }
      }
    )
    

  }

}


