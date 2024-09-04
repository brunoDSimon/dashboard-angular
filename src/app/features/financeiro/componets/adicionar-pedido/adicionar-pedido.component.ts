import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputCommonsComponent } from '../../../../shared/componets/input-commons/input-commons.component';
import { ModalLateralCommonsComponent } from '../../../../shared/componets/modal-lateral-commons/modal-lateral-commons.component';
import { JsonPipe } from '@angular/common';
import { FinanceiroService } from '../../service/financeiro.service';
import { pedidoDTO } from '../models/pedido.model';
import { InputSelectCommonsComponent } from "../../../../shared/componets/input-select-commons/input-select-commons.component";
import { LoadingComponent } from '../../../loading/loading.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { InputCurrencyComponent } from '../../../../shared/componets/input-currency/input-currency.component';

@Component({
  selector: 'app-adicionar-pedido',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    InputCommonsComponent, 
    ModalLateralCommonsComponent, 
    JsonPipe, 
    InputSelectCommonsComponent, 
    InputSelectCommonsComponent,
    LoadingComponent,
    NgbToastModule,
    InputCurrencyComponent
  ],
  templateUrl: './adicionar-pedido.component.html',
  styleUrl: './adicionar-pedido.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[FinanceiroService]
})
export class AdicionarPedidoComponent implements OnInit {
  @ViewChild('mySidebar', { static: false }) sidebar!: ModalLateralCommonsComponent;
  formGroup: FormGroup = new FormGroup({});
  public carregando: boolean = false;

  private _listEmpresas: Array<Empresa> = [];
  private _listUsuarios: Array<Usuario> = [];
  openSidebar() {
    this.sidebar.open();
    this.criarForm()
    this.filters()
  }

  ngOnInit(): void {
  }

  constructor(
    private formBuilder: FormBuilder, 
    private financeiroService: FinanceiroService
  ) {
    this.criarForm()
  }

  get listEmpresas() {
    return this._listEmpresas;
  }

  get listUsuarios() {
    return this._listUsuarios;
  }

  public criarForm() {
    this.formGroup = this.formBuilder.group({
      remessa: ['', Validators.required],
      valor: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
    });
  }


  public criarPedido() {
    if(this.formGroup.invalid) {
      console.log('invalid')
    }
    this.carregando = true;
    const fb = this.formGroup
    const body:pedidoDTO = {
      remessa: fb.get('remessa')?.value,
      valor: fb.get('valor')?.value,
      quantidade: fb.get('quantidade')?.value,
      modelo: fb.get('modelo')?.value,
      descricao: fb.get('descricao')?.value,
      empresa: fb.get('empresa')?.value,
      usuario: fb.get('usuario')?.value
    }

    this.financeiroService.criarPedido(body).subscribe((res) => {
      console.log(res)
      this.carregando = false;
    },(error:Error) => {
      console.log(error)
      this.carregando = false;

    })
  }


  public filters() {
    this.carregando = true;
    this.financeiroService.filters().subscribe((res) => {
      this._listEmpresas = res?.empresa;
      this._listUsuarios = res?.usuario;
      this.carregando = false;

      console.log(res)
    },(error:Error) => {
      console.log(error)
      this.carregando = false;

    })
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
