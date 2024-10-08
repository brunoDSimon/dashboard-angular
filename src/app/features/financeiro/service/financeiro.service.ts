import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators'
import { Service } from 'src/app/shared/service/service';
import { DateFormatPipe } from 'ngx-moment';
import { environment } from '../../../../environments/environment';
import { DefaultResponse } from 'src/app/shared/models/default-response.mode';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService extends Service{

  constructor(
    private http: HttpClient,
    private dateFormatPipe: DateFormatPipe,

  ) {
    super()
   }

  // CRIA UM TALAO
  public criarTalao(body): Observable<any>{
    return this.http.post<DefaultResponse>(environment.api_url+'bead', body, {headers: this.headers}).pipe(
      map(res =>{
        return this.filter(res)
      }),catchError((error: any) => {
          throw this.handleError(error);
        }
      )
    )
  }

  // VER A PRODUCAO
  public getTalao( dateEntry: any, dateFinal: any,companyID: any,dateFinalNotNul):Observable<any>{
    const filter ={
      dateEntry: dateEntry,
      dateFinal: dateFinal,
      companyID: companyID,
      dateFinalNotNul: dateFinalNotNul
    }
    const filtro = new URLSearchParams(filter).toString();
      return this.http.get(environment.api_url+`bead?`+filtro,{headers: this.headers}).pipe(
      map((res) =>{
        return Object(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }
  public getValoresFuncionario( userID: any | null, dateEntry: any, dateFinal: any,descont: any,dateFinalNotNul: any):Observable<any>{
    const filter ={
      dateEntry: dateEntry,
      dateFinal: dateFinal,
      userID: userID,
      descont: descont,
      dateFinalNotNul:dateFinalNotNul
    }
    const filtro = new URLSearchParams(filter).toString();
      return this.http.get<DefaultResponse>(environment.api_url+`bead/consultValuesPaymentUser?`+filtro,{headers: this.headers}).pipe(
      map((res) =>{
        return this.filter(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }



  // VER USUARIOS DISPONIVEIS
  public getUser():Observable<any>{
    return this.http.get<DefaultResponse>(environment.api_url+'user/lista',{headers: this.headers}).pipe(
      map((res) =>{
        return this.filter(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }

  // verificar se empresa é existente
  public checkCompanie(cnpj: any): Observable<any>{
    return this.http.get<DefaultResponse>(environment.api_url+'companies/verificarCNPJ/'+cnpj).pipe(
      map((res) =>{
        return this.filter(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }

  // criar empresa
  public createCompany(body): Observable<any>{
    return this.http.post<DefaultResponse>(environment.api_url+'companies',body,{headers: this.headers}).pipe(
      map((res) =>{
        return this.filter(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }
  public updateCompany(id,body):Observable<any>{
    return this.http.post<DefaultResponse>(environment.api_url+`companies/update/${id}`,body,{headers: this.headers}).pipe(
      map((res) =>{
        return this.filter(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }
  // VER EMPRESAS CADASTRADAS
  public getCompanies():Observable<any>{
    return this.http.get<DefaultResponse>(environment.api_url+'companies',{headers: this.headers}).pipe(
      map((res) =>{
        return this.filter(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }

  public getPdf(dateEntry: any, dateFinal: any,companyID: any):Observable<any>{
    const filter ={
      dateEntry: dateEntry,
      dateFinal: dateFinal,
      companyID: companyID
    }
    const filtro = new URLSearchParams(filter).toString();
    return this.http.get<DefaultResponse>(environment.api_url+'pdf?'+filtro, {headers: this.headers}).pipe(
      map((res) =>{
        return this.filter(res);
      },(error)=>{
        throw this.handleError(error);
      })
    )
  }
  public geratePaymentUser(userID: any, dateEntry: any, dateFinal: any, descont: any):Observable<any>{
    const filter ={
      dateEntry: dateEntry,
      dateFinal: dateFinal,
      userID: userID,
      descont: descont
    }
    const filtro = new URLSearchParams(filter).toString();
    return this.http.get<DefaultResponse>(environment.api_url+'bead/geratePaymentUser?'+filtro, {headers: this.headers}).pipe(
      map((res) =>{
        return this.filter(res);
      },(error)=>{
        throw this.handleError(error);
      })
    )}
  public totalSumPeriod(dateEntry: any, dateFinal: any):Observable<any>{
    const filter ={
      dateEntry: dateEntry,
      dateFinal: dateFinal,
    }
    const filtro = new URLSearchParams(filter).toString();
    return this.http.get<Response>(environment.api_url+'bead/totalSumPeriod?'+filtro,{headers: this.headers}).pipe(
      map((response) =>{
        return response;
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }

  public getBeadOne(id: any):Observable<any>{
    const filter ={
      id: id
    }
    return this.http.get<DefaultResponse>(environment.api_url+'bead/pesquisaID',{params: filter}).pipe(
      map((response) =>{
        return this.filter(response);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }

  public updateTalao(id,body): Observable<any>{
    return this.http.post(environment.api_url+`bead/update/${id}`, body, {headers: this.headers}).pipe(
      map(res =>{
        return res
      }),catchError((error) =>{
        throw console.error('error ao criar talao');
      })
    )
  }


  public apagarTalao(id): Observable<any> {
      const params = {
        id: id
      }
      return this.http.delete<DefaultResponse>(environment.api_url+ `bead/delete`, {params: params,headers: this.headers}).pipe(
        map(res =>{
          return this.filter(res)
        }),catchError((error: Error) => {
            throw this.handleError(error);
          }
        )
      )
  }
}
