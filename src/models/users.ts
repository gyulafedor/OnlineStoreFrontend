export class Users{
    email: string;
    name: string;
    password: string;

    constructor(userName: string, userEmail: string, userPassword: string){
        this.email = userName;
        this.name = userEmail;
        this.password = userPassword;
    }
}