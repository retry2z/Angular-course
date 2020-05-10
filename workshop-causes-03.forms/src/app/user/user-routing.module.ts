import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';


const routes: Routes =
    [
        //USER
        {
            path: 'user',
            canActivate: [
                AuthGuard
            ],
            data: { // DATA FOR ROUTE USE IN GUARD.
                isLogged: true,
            },
            children: [
                {
                    path: 'logout',
                    component: LogoutComponent,
                },
                {
                    path: 'profile',
                    component: ProfileComponent,
                },
            ],
        },
        {
            path: 'auth',
            canActivate: [
                AuthGuard
            ],
            data: {
                isLogged: false,
            },
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    component: UserComponent,
                },
                {
                    path: 'login',
                    component: LoginComponent,
                },
                {
                    path: 'register',
                    component: RegisterComponent,
                },
            ],
        }

    ];


export const UserRoutingModule = RouterModule.forChild(routes);
