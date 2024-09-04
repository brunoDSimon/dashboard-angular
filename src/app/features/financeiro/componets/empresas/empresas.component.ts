import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';

@Component({
  selector: 'app-empresas',
  standalone: false,
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss'
})
export class EmpresasComponent implements OnInit {

  private _listaEmpresa: any = [];
  constructor(
    private readonly financeiroService:FinanceiroService
  ) {}

  get listaEmpresa() {
    return this._listaEmpresa;
  }

  ngOnInit(): void {
    this.empresas()
  }


  public empresas() {
    this.financeiroService.empresas(1).subscribe((res)=> {
      this._listaEmpresa = res;
      console.log(this._listaEmpresa, res)
    },(error:Error) => {
      console.log(error)
    })
  }
}
