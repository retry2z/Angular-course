import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, ProfileComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
