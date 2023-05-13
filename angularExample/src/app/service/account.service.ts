import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { AlertifyService } from './alertify.service';

@Injectable()
export class AccountService {

  constructor(private alertifyService:AlertifyService) { }
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == "abdllhshn" && user.password == "123456") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
 
    }
    else {
      this.alertifyService.succes("Kullanıcı bulunamadı")
      return false  }

  }
  isLoggedIn() {
    return this.loggedIn
  }

  logOut() {

    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
