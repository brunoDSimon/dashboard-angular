import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FinanceiroComponent} from './componets/financeiro.component'
import { ProducaoComponent } from './componets/producao/producao.component';
import { EmpresasComponent } from './componets/empresas/empresas.component';
import { AdicionarEmpresaComponent } from "./componets/adicionar-empresa/adicionar-empresa.component";
@NgModule({
  imports: [
    CommonModule,
    FinanceiroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AdicionarEmpresaComponent
],
  declarations: [
    FinanceiroComponent,
    ProducaoComponent,
    EmpresasComponent,
  ],
  schemas: [],
})
export class FinanceiroModule { }
