import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: 'financeiro',
        loadChildren: () => import('./features/financeiro/financeiro.module').then(m => m.FinanceiroModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
      },
      {
        path: '',
        redirectTo: 'financeiro',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'financeiro',
        pathMatch: 'full'
      },
];
