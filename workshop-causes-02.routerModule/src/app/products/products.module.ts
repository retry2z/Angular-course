import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [DetailsComponent, CreateComponent, ListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  exports: [
    DetailsComponent,
    ListComponent,
  ]
})
export class ProductsModule { }
