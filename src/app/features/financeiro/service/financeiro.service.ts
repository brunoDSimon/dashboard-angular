import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { DateFormatPipe } from 'ngx-moment';
import { Service } from '../../../shared/service/service';
import { catchError, map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { DefaultResponse } from '../../../shared/models/default-response.mode';
import { pedidoDTO } from '../componets/models/pedido.model';
import { empresaDTO } from '../componets/models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService extends Service{

  constructor(
    private http: HttpClient,
  ) {
    super()
   }



   public criarPedido(body:pedidoDTO):Observable<any> {
    return this.http.post<DefaultResponse>(environment.pedido, body).pipe(
      map((res) => this.filter(res)),
      catchError((error: any) => {
        throw this.handleError(error);
      })
    );
   }

   public filters():Observable<ResponseFilters> {
    return this.http.get<DefaultResponse>(environment.filters).pipe(
      map((res) => this.filter(res)),
      catchError((error: any) => {
        throw this.handleError(error);
      })
    );
   }


   public createEmpresas(body:empresaDTO):Observable<any> {
    return this.http.post<DefaultResponse>(environment.empresas, body).pipe(
      map((res) => this.filter(res)),
      catchError((error: any) => {
        throw this.handleError(error);
      })
    );
   }

   public updateEmpresas(body:empresaDTO):Observable<any> {
    return this.http.patch<DefaultResponse>(environment.empresas, body).pipe(
      map((res) => this.filter(res)),
      catchError((error: any) => {
        throw this.handleError(error);
      })
    );
   }
 
   public empresas(page:number, limit:number = 10):Observable<any> {
    const params = {
      page:page,
      limit:limit
    }
    return this.http.get<DefaultResponse>(environment.empresas, {params:params}).pipe(
      map((res) => this.filter(res)),
      catchError((error: any) => {
        throw this.handleError(error);
      })
    );
   }


   public empresasByOne(id:any):Observable<any> {
    return this.http.get<DefaultResponse>(environment.empresas+`/${id}`).pipe(
      map((res) => this.filter(res)),
      catchError((error: any) => {
        throw this.handleError(error);
      })
    );
   }


   public deleteEmpresa(id:any):Observable<any> {
    return this.http.delete<DefaultResponse>(environment.empresas+`/${id}`).pipe(
      map((res) => this.filter(res)),
      catchError((error: any) => {
        throw this.handleError(error);
      })
    );
   }


}
export interface Usuario {
  value: string;
  label: string;
}

export interface Empresa {
  value: string;
  label: string;
}

export interface ResponseFilters {
  usuario: Usuario[];
  empresa: Empresa[];
}
