import { Component, OnInit } from '@angular/core';
import { CausesService } from '../causes.service';
import { ICause } from '../shared/interfaces/cause';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  constructor(private causeService: CausesService) {
  }

  get causes() {
    return this.causeService.causes;
  }

  selectCauseHandler(item: ICause) {
    this.causeService.selectedCause = item;
  }

  ngOnInit() {
    this.causeService.loadCauses();
  }
}
