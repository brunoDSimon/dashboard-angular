import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputCommonsComponent } from '../../../../shared/componets/input-commons/input-commons.component';
import { ModalLateralCommonsComponent } from '../../../../shared/componets/modal-lateral-commons/modal-lateral-commons.component';
import { JsonPipe } from '@angular/common';
import { LoadingComponent } from '../../../loading/loading.component';
import { FinanceiroService } from '../../service/financeiro.service';

@Component({
  selector: 'app-adicionar-empresa',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    InputCommonsComponent, 
    ModalLateralCommonsComponent, 
    JsonPipe, 
    LoadingComponent,
  ],
  templateUrl: './adicionar-empresa.component.html',
  styleUrl: './adicionar-empresa.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[FinanceiroService],
})
export class AdicionarEmpresaComponent implements OnInit {
  @ViewChild('mySidebar', { static: false }) sidebar!: ModalLateralCommonsComponent;
  formGroup: FormGroup = new FormGroup({});

  constructor() {}
  ngOnInit(): void {
    
  }

  openSidebar() {
    this.sidebar.open();
  }

}
