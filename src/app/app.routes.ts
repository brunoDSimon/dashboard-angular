import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
      },
];
