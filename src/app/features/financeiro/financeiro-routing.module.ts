import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FinanceiroComponent} from './componets/financeiro.component'
import { ProducaoComponent } from './componets/producao/producao.component';
import { EmpresasComponent } from './componets/empresas/empresas.component';


const routes: Routes = [
  {path: '', component: FinanceiroComponent},
  {path: 'producao', component:ProducaoComponent},
  {path: 'empresa', component:EmpresasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceiroRoutingModule { }
