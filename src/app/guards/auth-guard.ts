import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../features/login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
  private loginService: LoginService,
  private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    {url}: RouterStateSnapshot
  ):Observable<boolean> | boolean{
    return this.loginService.logado.pipe(map((logado:Boolean) =>{
      console.log(logado)
      if(!logado || this.loginService?.dadosUser?.token == '') {
        this.router.navigateByUrl('/login');
        return false
      } else {
        return true
      }
    }))
  }
}