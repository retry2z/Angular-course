import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [ListComponent, ProfileComponent],
  imports: [
    UserRoutingModule,
    CommonModule
  ],
  exports: [
  ],
})
export class UserModule { }
