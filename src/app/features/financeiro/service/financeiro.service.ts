import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { DateFormatPipe } from 'ngx-moment';
import { Service } from '../../../shared/service/service';
import { catchError, map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { DefaultResponse } from '../../../shared/models/default-response.mode';
import { pedidoDTO } from '../componets/models/pedido.model';

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


}
