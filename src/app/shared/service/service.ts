import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Messege} from '../models/messege';
import { DefaultResponse } from '../models/default-response.mode';
@Injectable({
  providedIn: 'root'
})
export class Service {

  _headers: HttpHeaders;
  constructor() {
    this._headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  get headers() {
    return this._headers;
  }
  filter(response: DefaultResponse, calllback?: any) {
    if(response.status == 1 || response.status == '1') {
      return response.data
    } else {
      throw new Error(Messege.erro_inesperado);
    }
  }
  handleError(err: any) {
    if (!(err instanceof Error)) {
      return new Error(Messege.erro_inesperado);
    } else {
      return err;
    }
  }
}
