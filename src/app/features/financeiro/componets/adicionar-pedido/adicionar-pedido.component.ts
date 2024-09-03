import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputCommonsComponent } from '../../../../shared/componets/input-commons/input-commons.component';
import { ModalLateralCommonsComponent } from '../../../../shared/componets/modal-lateral-commons/modal-lateral-commons.component';
import { JsonPipe } from '@angular/common';
import { FinanceiroService } from '../../service/financeiro.service';
import { pedidoDTO } from '../models/pedido.model';

@Component({
  selector: 'app-adicionar-pedido',
  standalone: true,
  imports: [ReactiveFormsModule, InputCommonsComponent, ModalLateralCommonsComponent, JsonPipe],
  templateUrl: './adicionar-pedido.component.html',
  styleUrl: './adicionar-pedido.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[FinanceiroService]
})
export class AdicionarPedidoComponent implements OnInit {
  @ViewChild('mySidebar', { static: false }) sidebar!: ModalLateralCommonsComponent;
  formGroup: FormGroup = new FormGroup({});

  openSidebar() {
    this.sidebar.open();
    this.criarForm()
  }

  ngOnInit(): void {
  }

  constructor(
    private formBuilder: FormBuilder, 
    private financeiroService: FinanceiroService
  ) {
    this.criarForm()
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
    },(error:Error) => {
      console.log(error)
    })
  }
}
