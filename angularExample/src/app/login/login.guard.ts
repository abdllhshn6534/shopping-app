import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../service/account.service";

@Injectable()

export class LoginGuard implements CanActivate{
    constructor(private accountService:AccountService,
               private router:Router,
               ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged=this.accountService.isLoggedIn();
        if(logged){
            return true;
        }
        else{
            this.router.navigate(["login"]);
            return false;
    }
    }
}