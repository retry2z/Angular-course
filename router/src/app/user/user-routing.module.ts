import { Routes, RouterModule } from '@angular/router';
import { ListComponent as UserList } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes =
    [
        //USER
        {
            path: 'user',
            canActivate: [
                AuthGuard
            ],
            data: { // DATA FOR ROUTE USE IN GUARD OR IN COMPONENT.
                roles: ['admin', 'guest'],
            },
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'list',
                },
                {
                    path: 'list',
                    component: UserList,

                },
                {
                    path: ':id',
                    component: ProfileComponent,
                },
            ],
        },
    ];


export const UserRoutingModule = RouterModule.forChild(routes);
