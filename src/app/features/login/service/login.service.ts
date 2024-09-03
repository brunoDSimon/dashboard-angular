import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable } from "rxjs";
import { Service } from "../../../shared/service/service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { DefaultResponse } from "../../../shared/models/default-response.mode";
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends Service {
  private _logado = new BehaviorSubject<boolean>(false);

  @LocalStorage('dados')
  private dados: any;

  get logado() {
    // Atualiza o estado de login baseado em 'dados'
    console.log()
    if (this.dadosUser) {
      this.setLogin(true);
    } else {
      this.setLogin(false);
    }
    return this._logado.asObservable();
  }

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private router: Router
  ) {
    super();
    // Verifica o estado de login ao inicializar o serviço
    this.setLogin(this.isAuthenticated());
  }

  public setLogin(valor: boolean) {
    this._logado.next(valor);
  }

  public setDadosUsuario(dadosUsuario: any) {
    const base64Url = dadosUsuario.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const dados = JSON.parse(jsonPayload);
    dados.token = dadosUsuario;

    this.storage.store('dados', dados);
    this.setLogin(true);
  }

  get dadosUser() {
    return this.storage.retrieve('dados');
  }

  isAuthenticated(): boolean {
    // Verifica se 'dados' está presente
    return !!this.storage.retrieve('dados');
  }

  public clearAuth() {
    this.storage.clear('dados');
    this.setLogin(false);
    return this.router.navigate(['/']);
  }

  public auth(body: any): Observable<any> {
    return this.http.post<DefaultResponse>(environment.auth + `/authentication`, body, { headers: this.headers }).pipe(
      map((res) => this.filter(res)),
      catchError((error: any) => {
        throw this.handleError(error);
      })
    );
  }
}
