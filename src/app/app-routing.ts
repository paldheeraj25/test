import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user-list', loadChildren: './user-list/user-list.module#UserListModule'
  },
  {
    path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]
export const AppRouting = RouterModule.forRoot(routes);