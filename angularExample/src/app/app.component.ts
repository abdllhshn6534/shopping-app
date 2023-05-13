import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-root',//bir yelerde gösterilirken çağırılacak isimdir
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private accountService:AccountService){}
  title = 'angularExample';

  isLoggedin(){
    return this.accountService.isLoggedIn()
  }
  loggOut(){
    return this.accountService.logOut();
  }
  
}
