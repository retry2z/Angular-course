import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes =
  [
    //Commons
    {
      path: '',
      pathMatch: 'full',
      component: HomeComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    //USER ROUTING IN USER.MODULE.TS
    {
      path: '**',
      component: NotFoundComponent,
    },
  ];


export const AppRoutingModule = RouterModule.forRoot(routes);
