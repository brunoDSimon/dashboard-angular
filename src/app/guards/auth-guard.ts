import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../features/login/service/login.service';
import { UsersDataService } from '../shared/service/UsersData.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
  private loginService: LoginService,
  private userData: UsersDataService,
  private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    {url}: RouterStateSnapshot
  ):Observable<boolean> | boolean{
    return this.loginService.logado.pipe(map((logado:Boolean) =>{
      if(!logado || this.userData.auth.token == '') {
        this.router.navigateByUrl('/login');
        return false
      } else {
        return true
      }
    }))
  }
}
