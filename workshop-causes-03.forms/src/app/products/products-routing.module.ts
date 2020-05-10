import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes =
    [
        //PRODUCT
        {
            path: 'products',
            canActivate: [
                AuthGuard
            ],
            data: { // DATA FOR ROUTE USE IN GUARD.
                isLogged: true,
            },
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'list',
                },
                {
                    path: 'create',
                    component: CreateComponent,
                },
                {
                    path: 'details/:id',
                    component: DetailsComponent,
                    data: { // DATA 
                        shouldFetch: true,
                    },
                },
                {
                    path: 'list',
                    component: ListComponent,
                },
            ],
        },
    ];


export const ProductsRoutingModule = RouterModule.forChild(routes);
