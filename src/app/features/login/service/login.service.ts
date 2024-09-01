import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable } from "rxjs";
import { Service } from "../../../shared/service/service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { DefaultResponse } from "../../../shared/models/default-response.mode";


@Injectable({
  providedIn: 'root'
})
export class LoginService extends Service{

 

  constructor(
    private http: HttpClient,
  ) {
    super() 
    }


    public auth(body:any):Observable<any> {
      return this.http.post<DefaultResponse>(environment.auth+`authentication`,body, {headers: this.headers}).pipe(
        map((res) =>{
          return this.filter(res)
        },catchError((error: any) => {
            throw this.handleError(error);
          })
        )
      )
    }

}
