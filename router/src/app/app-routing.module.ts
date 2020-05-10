import { Routes, RouterModule } from '@angular/router';
import { ListComponent as TodoList } from './todo/list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes =
  [
    //Commons
    {
      path: '',
      pathMatch: 'full',
      component: TodoList,
    },
    //USER ROUTING IN USER.MODULE.TS
    {
      path: '**',
      component: NotFoundComponent,
    },
  ];


export const AppRoutingModule = RouterModule.forRoot(routes);
