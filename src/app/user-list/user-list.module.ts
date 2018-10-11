import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  declarations: [UserListComponent],
  providers: [
    UserService
  ]
})
export class UserListModule { }
