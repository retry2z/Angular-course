import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  get amount() {
    if (this.selectedItem.collectedAmount >= this.selectedItem.neededAmount) {
      return 'text-success';
    }
    if (this.selectedItem.collectedAmount < 2 * (this.selectedItem.neededAmount / 3) &&
      this.selectedItem.collectedAmount > (this.selectedItem.neededAmount / 3)) {
      return 'text-warning';
    }

    return 'text-danger';
  }

  get selectedItem() {
    return this.causeService.selectedCause;
  }

  constructor(private causeService: CausesService) {
  }

  makeDonation() {
    console.log(this.amountInput.nativeElement.value);
    this.causeService.donation(+this.amountInput.nativeElement.value)
      .subscribe(response => {
        this.causeService.loadCauses();
        this.selectedItem.collectedAmount = response.collectedAmount;
      });
  }
  ngOnInit(): void {
  }

}
