import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Service } from "../../../shared/service/service";
import { HttpClient } from "@angular/common/http";
import { DateFormatPipe } from "ngx-moment";
import { UsersDataService } from "../../../shared/service/UsersData.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends Service{
  private _logado = new BehaviorSubject<boolean>(false);

 

constructor(
  private http: HttpClient,
  private dateFormatPipe: DateFormatPipe,
  private userData: UsersDataService,
) {super() }

}
