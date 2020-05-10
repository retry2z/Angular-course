import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../products.service';
import { ICause } from 'src/app/shared/interfaces/cause';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;
  isRouteComponent: false;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.isRouteComponent = this.activatedRoute.snapshot.data.shouldFetch;
  }


  ngOnInit(): void {
    if (this.isRouteComponent) {
      this.productsService.details(this.activatedRoute.snapshot.params.id);
    }
  }

  get selectedItem() {
    return this.productsService.item;
  }

  get amount() {
    if (this.selectedItem.collectedAmount >= this.selectedItem.neededAmount) {
      return 'highAmount';
    }
    if (this.selectedItem.collectedAmount < 2 * (this.selectedItem.neededAmount / 3) &&
      this.selectedItem.collectedAmount > (this.selectedItem.neededAmount / 3)) {
      return 'middleAmount';
    }

    return 'lowAmount';
  }

  makeDonation() {
    this.productsService.donation(+this.amountInput.nativeElement.value);
    this.amountInput.nativeElement.value = '';
  }

}
