import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import {FinanceiroComponent} from './componets/financeiro.component'


@NgModule({
  imports: [
    CommonModule,
    FinanceiroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgbModule,
 
  ],
  declarations: [
    FinanceiroComponent,
  ],
  schemas: [],
})
export class FinanceiroModule { }
