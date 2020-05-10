import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ICause } from 'src/app/shared/interfaces/cause';

@Component({
  selector: 'app-products-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productsService: ProductsService) {

  }

  get products() {
    return this.productsService.products;
  }

  selectCauseHandler(data: ICause) {
    this.productsService.item = data;
  }

  ngOnInit(): void {
    this.productsService.load();
  }
}
